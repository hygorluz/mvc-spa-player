import React from 'react';
import {
  Box,
  Text,
  Flex,
  Spinner,
  Image,
} from '@chakra-ui/react';

import { useMusicPlayer } from '../hooks/useMusicPlayer';
import PlayerControls from './PlayerControls';

const AudioPlayer = () => {
  const { audioControls, actions, music, loading, isProcessing} = useMusicPlayer()
  const [audio, state] = audioControls

  if (loading) {
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
    <Box p={4}>
      {audio}
      <Flex alignItems="center" justifyContent="center" flexDirection={'column'} mb={5}>
        <Image src={music.image} alt={music.title} width={500} height={500} />
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">{music.title}</Text>
      </Flex>
      <PlayerControls state={state} actions={actions} isProcessing={isProcessing} />
    </Box>
  );
};

export default AudioPlayer;
