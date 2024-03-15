import React from 'react';
import {
  Box,
  Text,
  Flex,
  Image,
} from '@chakra-ui/react';

import { useMusicPlayer } from '../hooks/useMusicPlayer';
import PlayerControls from './PlayerControls';

const AudioPlayer = ({ musics }) => {
  const { audioControls, actions, music, isProcessing} = useMusicPlayer(musics)
  const [audio, state] = audioControls

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
