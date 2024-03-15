import React from "react";
import { createRoot } from 'react-dom/client';

import { ChakraProvider } from "@chakra-ui/react";

import Header from "./components/Header";
import AudioPlayer from "./components/Player";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <AudioPlayer />
    </ChakraProvider>
  )
}

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(<App />)