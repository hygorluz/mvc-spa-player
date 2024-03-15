import { IconButton } from "@chakra-ui/button"
import { Box, Flex, Text } from "@chakra-ui/layout"
import { Progress } from "@chakra-ui/progress";
import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from "@chakra-ui/slider";
import { 
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
  FaVolumeMute,
  FaVolumeUp,
  FaStepBackward,
  FaStepForward
} from 'react-icons/fa';

const PlayerControls = ({ actions, state, isProcessing }) => {

  if (isProcessing) {
    return <Progress isIndeterminate />
  }

  return (
    <>
    <Flex alignItems="center" justifyContent="space-between" gap="2">
        <div></div>
        <Flex alignItems="center"  gap="2">
          <IconButton
            icon={<FaStepBackward />}
            onClick={actions.goToPreviousMusic}
          />
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
          <IconButton
            icon={<FaStepForward />}
            onClick={actions.goToNextMusic}
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
    </>
  )
}

export default PlayerControls