import { useEffect, useState } from "react"
import AudioPlayer from "../components/Player"
import MusicApi from "../services/musicApi";
import { Spinner } from "@chakra-ui/spinner";
import { Flex } from "@chakra-ui/layout";

const Player = () => {
  const [loading, setLoading] = useState(false)
  const [musics, setMusics] = useState(null)

  useEffect(() => {
    setLoading(true)
    MusicApi.getMusics().then(data => {
      setMusics(data)
      setLoading(false)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading || !musics) {
    return (
      <Flex alignItems="center" justifyContent="center">
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />      
      </Flex>
    )
  }


  return (
   <AudioPlayer musics={musics} /> 
  )
}

export default Player