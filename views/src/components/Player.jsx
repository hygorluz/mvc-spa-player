import React from 'react';
import {
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  IconButton,
  Text,
  Flex,
  Spinner,
} from '@chakra-ui/react';

import { 
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
  FaVolumeMute,
  FaVolumeUp 
} from 'react-icons/fa';
import { useMusicPlayer } from '../hooks/useMusicPlayer';

const AudioPlayer = () => {
  const { audioControls, actions, loading} = useMusicPlayer()
  const [audio, state] = audioControls

  return (
    <Box p={4}>
      {audio}

      <Flex alignItems="center" justifyContent="center" gap="2" minHeight={'60vh'}>
        <Spinner size="xl" hidden={!loading} />
      </Flex>

      <Flex alignItems="center" justifyContent="space-between" gap="2">
        <div></div>
        <Flex alignItems="center"  gap="2">
          <IconButton
            icon={<FaBackward />}
            aria-label="Backward"
            onClick={actions.handleBackward}
          />
          <IconButton
            onClick={actions.handlePlayPause}
            icon={state.playing ? <FaPause /> : <FaPlay />}
            aria-label={state.playing ? 'Pause' : 'Play'}
          />
          <IconButton
            icon={<FaForward />}
            aria-label="Forward"
            onClick={actions.handleForward}
          />
        </Flex>

        <IconButton 
          icon={state.muted ? <FaVolumeMute /> : <FaVolumeUp />}
          aria-label="Mute"
          onClick={actions.handleMute}
        />
      </Flex>
      <Box>
        <Slider
          id="track-progress"
          defaultValue={0}
          min={0}
          max={state.duration}
          value={state.time}
          onChange={actions.handleSeekChange}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb boxSize={4} />
        </Slider>
      </Box>
      <Flex justifyContent="space-between" fontSize="sm">
        <Text>{new Date(state.time * 1000).toISOString().substr(14, 5)}</Text>
        <Text>{new Date((state.duration - state.time) * 1000).toISOString().substr(14, 5)}</Text>
      </Flex>
    </Box>
  );
};

export default AudioPlayer;
