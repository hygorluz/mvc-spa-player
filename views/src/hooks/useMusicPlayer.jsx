import { useEffect, useRef, useState } from "react";
import {useAudio} from 'react-use'; 
import MusicApi from "../services/musicApi";

export const useMusicPlayer = () => {
  const [musics, setMusics] = useState([])
  const currentMusicIndex = useRef(0)

  const audioControls = useAudio({
    src: musics[currentMusicIndex.current]?.src,
    autoPlay: true,
  })

  const [audio, state, controls] = audioControls

  
  useEffect(() => {
    MusicApi.getMusics().then(data => setMusics(data))
  }, [])

  

  return audioControls

}
