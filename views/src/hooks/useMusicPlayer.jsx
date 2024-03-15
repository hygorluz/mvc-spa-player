import { useState } from "react";
import {useAudio} from 'react-use'; 
import { usePreFetchImages } from "./usePreFetchImages";
import { useProcessingMedia } from "./useProcessingMedia";
import { useAutoStepper } from "./useAutoStepper";

export const useMusicPlayer = (playList) => {
  const [currentMusicIndex, setCurrentMusicIndex] = useState(0)
  const currentMusic = playList[currentMusicIndex]

  const audioControls = useAudio({
    src: currentMusic?.src,
    autoPlay: true,
  })
  const [, state, controls, ref] = audioControls
  const prefetchImages = usePreFetchImages()
  const isProcessing = useProcessingMedia(ref)
  

  useAutoStepper(ref, goToNextMusic)
  prefetchImages(playList)

  
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
    if (currentMusicIndex === playList.length - 1) return
    
    setCurrentMusicIndex(currentMusicIndex + 1 % playList.length)
    controls.seek(0)
    controls.play()
  }
  
  function goToPreviousMusic() {
    if (currentMusicIndex === 0) return

    setCurrentMusicIndex(currentMusicIndex - 1 + playList.length % playList.length)
    controls.seek(0)
    controls.play()
  }


  


  return {
    audioControls,
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
