import React from "react";
import {useAudio} from 'react-use'; 
import { Heading, Flex, Divider } from "@chakra-ui/react";
import AudioPlayer from "./Player";

const Header = () => {
  const audioControls = useAudio({
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    autoPlay: true,
  });

  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="0.5rem"
        bg="gray.400"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="sm">Todos</Heading>
          <Divider />
        </Flex>
      </Flex>
      
      <pre>{JSON.stringify(audioControls[1], null, 2)}</pre>

    {/* <div>
      {audio}
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={controls.pause}>Pause</button>
      <button onClick={controls.play}>Play</button>
      <br/>
      <button onClick={controls.mute}>Mute</button>
      <button onClick={controls.unmute}>Un-mute</button>
      <br/>
      <button onClick={() => controls.volume(.1)}>Volume: 10%</button>
      <button onClick={() => controls.volume(.5)}>Volume: 50%</button>
      <button onClick={() => controls.volume(1)}>Volume: 100%</button>
      <br/>
      <button onClick={() => controls.seek(state.time - 5)}>-5 sec</button>
      <button onClick={() => controls.seek(state.time + 5)}>+5 sec</button>
    </div> */}

    <AudioPlayer audioControls={audioControls} /> 
    </>
  );
};

export default Header;