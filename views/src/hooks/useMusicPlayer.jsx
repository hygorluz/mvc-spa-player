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

  const [audio, state, controls] = audioControls

  
  useEffect(() => {
    setLoading(true)
    MusicApi.getMusics().then(data => {
      setMusics(data)
      setLoading(false)
    })
  }, [])

  

  return {
    audioControls,
    loading
  }

}
