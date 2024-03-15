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
  const { audioControls, loading} = useMusicPlayer()
  const [audio, state, controls] = audioControls

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
            onClick={handleBackward}
          />
          <IconButton
            onClick={handlePlayPause}
            icon={state.playing ? <FaPause /> : <FaPlay />}
            aria-label={state.playing ? 'Pause' : 'Play'}
          />
          <IconButton
            icon={<FaForward />}
            aria-label="Forward"
            onClick={handleForward}
          />
        </Flex>

        <IconButton 
          icon={state.muted ? <FaVolumeMute /> : <FaVolumeUp />}
          aria-label="Mute"
          onClick={handleMute}
        />
      </Flex>
      <Box>
        <Slider
          id="track-progress"
          defaultValue={0}
          min={0}
          max={state.duration}
          value={state.time}
          onChange={handleSeekChange}
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
