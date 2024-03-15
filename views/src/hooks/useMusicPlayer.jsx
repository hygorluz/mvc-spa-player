import { useEffect, useRef, useState } from "react";
import {useAudio} from 'react-use'; 
import MusicApi from "../services/musicApi";

export const useMusicPlayer = () => {
  const [loading, setLoading] = useState(true)
  const [musics, setMusics] = useState([])
  const currentMusicIndex = useRef(0)
  const currentMusic = musics[currentMusicIndex.current]

  const audioControls = useAudio({
    src: currentMusic?.src,
    autoPlay: true,
  })

  const [, state, controls] = audioControls

  
  useEffect(() => {
    setLoading(true)
    MusicApi.getMusics().then(data => {
      setMusics(data)
      setLoading(false)
    })
  }, [])

  
  const handlePlayPause = () => {
    if (state.playing) {
      controls.pause()
      return
    }
    
    controls.play()
  }

  const handleBackward = () => {
    controls.seek(state.time - 10)
  }

  const handleForward = () => {
    controls.seek(state.time + 10)
  }

  const handleSeekChange = (value) => {
    controls.seek(value)
  }

  const handleMute = () => {
    if (state.muted) {
      controls.unmute()
      return
    }

    controls.mute()
  }

  return {
    audioControls,
    loading,
    actions: {
      handlePlayPause,
      handleBackward,
      handleForward,
      handleSeekChange,
      handleMute
    }
  }

}
