import React from "react";
import { Heading, Flex } from "@chakra-ui/react";
import { FaMusic } from 'react-icons/fa';

const Header = () => {
  return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        bg="gray.400"
        py={6}
        px={3}
      >
        <Flex align="center" mr={5} color={'blue.800'}>
          <FaMusic size={30} color="inherit"/>
          <Heading ml={3} as="h1" color="inherit">Simple Music Player</Heading>
        </Flex>
      </Flex>
  );
};

export default Header;