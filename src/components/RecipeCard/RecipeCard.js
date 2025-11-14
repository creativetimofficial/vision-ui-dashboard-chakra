import React from 'react';
import { Box, Image, Text, Flex, Badge, useColorModeValue } from '@chakra-ui/react';

const RecipeCard = ({ recipe }) => {
  const { name, description, camera_model, image_url } = recipe;
  const textColor = useColorModeValue('gray.700', 'white');

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      bg={useColorModeValue('white', 'gray.800')}
      transition="transform 0.2s"
      _hover={{ transform: 'scale(1.05)' }}
    >
      <Image src={image_url} alt={name} height="200px" objectFit="cover" />
      <Box p="6">
        <Flex align="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {camera_model}
          </Badge>
        </Flex>
        <Text
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
          color={textColor}
        >
          {name}
        </Text>
        <Text mt="2" color="gray.500" isTruncated>
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default RecipeCard;
