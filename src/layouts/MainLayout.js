import React from 'react';
import { Box, Flex, HStack, Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle/ThemeToggle';

const MainLayout = ({ children }) => {
  return (
    <Box>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        bg="gray.800"
        color="white"
      >
        <Flex align="center" mr={5}>
          <ChakraLink as={RouterLink} to="/" fontSize="xl" fontWeight="bold">
            SonyColorLab
          </ChakraLink>
        </Flex>
        <HStack spacing={8} align="center">
          <ChakraLink as={RouterLink} to="/recipes">
            Recipes
          </ChakraLink>
          <ChakraLink as={RouterLink} to="/create">
            Create
          </ChakraLink>
          <ChakraLink as={RouterLink} to="/about">
            About
          </ChakraLink>
          <ChakraLink as={RouterLink} to="/login">
            Login
          </ChakraLink>
          <ThemeToggle />
        </HStack>
      </Flex>
      <Box as="main" p={8}>
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
