import { useEffect, useState } from "react";
import {useAudio} from 'react-use'; 
import MusicApi from "../services/musicApi";
import { usePreFetchImages } from "./usePreFetchImages";
import { useProcessingMedia } from "./useProcessingMedia";
import { useAutoStepper } from "./useAutoStepper";

export const useMusicPlayer = () => {
  const [loading, setLoading] = useState(true)
  const [musics, setMusics] = useState([])
  const [currentMusicIndex, setCurrentMusicIndex] = useState(0)
  const currentMusic = musics[currentMusicIndex]

  const audioControls = useAudio({
    src: currentMusic?.src,
    autoPlay: true,
  })
  const [, state, controls, ref] = audioControls
  const prefetchImages = usePreFetchImages()
  const isProcessing = useProcessingMedia(ref)
  

  useAutoStepper(ref, goToNextMusic)

  useEffect(() => {
    setLoading(true)
    MusicApi.getMusics().then(data => {
      prefetchImages(data)
      setMusics(data)
      setLoading(false)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  
  function handlePlayPause () {
    if (state.playing) {
      controls.pause()
      return
    }
    
    controls.play()
  }

  function handleBackward (){
    controls.seek(state.time - 10)
  }

  function handleForward () {
    controls.seek(state.time + 10)
  }

  function handleSeekChange  (value) {
    controls.seek(value)
  }

  function handleMute() {
    if (state.muted) {
      controls.unmute()
      return
    }

    controls.mute()
  }

  function goToNextMusic() {
    if (currentMusicIndex === musics.length - 1) return
    
    setCurrentMusicIndex(currentMusicIndex + 1 % musics.length)
    controls.seek(0)
    controls.play()
  }
  
  function goToPreviousMusic() {
    if (currentMusicIndex === 0) return

    setCurrentMusicIndex(currentMusicIndex - 1 + musics.length % musics.length)
    controls.seek(0)
    controls.play()
  }


  


  return {
    audioControls,
    loading,
    music: currentMusic,
    isProcessing,
    actions: {
      handlePlayPause,
      handleBackward,
      handleForward,
      handleSeekChange,
      handleMute,
      goToNextMusic,
      goToPreviousMusic
    }
  }

}
