import React from "react";
import { createRoot } from 'react-dom/client';

import { ChakraProvider } from "@chakra-ui/react";

import Header from "./components/Header";
import Player from "./pages/Player";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Player />
    </ChakraProvider>
  )
}

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(<App />)