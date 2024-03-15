import React, { useRef, useState } from 'react';
import {
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  IconButton,
  Text,
  Flex,
  useBoolean,
} from '@chakra-ui/react';
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa';

const AudioPlayer = ({ audioControls }) => {
  const [isPlaying, setIsPlaying] = useBoolean();
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);
  const [audio, state, controls] = audioControls

  const handlePlay = () => {
    setIsPlaying(true)
    controls.play()
  }

  return (
    <Box p={4}>
      {audio}
      <Flex alignItems="center" justifyContent="center" gap="2">
        <IconButton
          icon={<FaBackward />}
          aria-label="Backward"
        />
        <IconButton
          onClick={handlePlay}
          icon={isPlaying ? <FaPause /> : <FaPlay />}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        />
        <IconButton
          icon={<FaForward />}
          // onClick={() => handleSeekChange(currentTime + 10)}
          aria-label="Forward"
        />
      </Flex>
      <Box>
        <Slider
          id="track-progress"
          defaultValue={0}
          min={0}
          max={state.duration}
          value={state.time}
          // onChange={handleSeekChange}
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
