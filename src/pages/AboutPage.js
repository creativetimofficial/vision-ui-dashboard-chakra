import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const AboutPage = () => {
  return (
    <Box p={8} maxW="2xl" mx="auto">
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl">
          About SonyColorLab
        </Heading>
        <Text fontSize="lg">
          SonyColorLab is a community-driven platform for creating, sharing, and discovering custom color recipes for Sony cameras. Our mission is to empower photographers and videographers to achieve their creative vision by providing a tool to fine-tune their camera's color output.
        </Text>
        <Text fontSize="lg">
          Whether you're a seasoned professional or just starting, SonyColorLab offers a space to experiment with color, learn from others, and contribute to a growing library of unique looks.
        </Text>
      </VStack>
    </Box>
  );
};

export default AboutPage;
