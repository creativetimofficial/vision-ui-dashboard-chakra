import React from 'react';
import { Box, Flex, Heading, Text, Button, VStack, HStack, SimpleGrid, Spinner } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard/RecipeCard';
import { useRecipes } from '../hooks/useRecipes';

const HomePage = () => {
  const { recipes, loading, error } = useRecipes();
  const featuredRecipes = recipes.slice(0, 3);

  return (
    <Box>
      {/* Hero Section */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        textAlign="center"
        py={20}
        bg="gray.800"
        color="white"
      >
        <Heading as="h1" size="2xl" mb={4}>
          SonyColorLab
        </Heading>
        <Text fontSize="xl" mb={8}>
          Create and share your own custom color recipes for Sony cameras.
        </Text>
        <HStack spacing={4}>
          <Link to="/recipes">
            <Button colorScheme="teal" size="lg">
              Browse Recipes
            </Button>
          </Link>
          <Link to="/create">
            <Button colorScheme="gray" size="lg">
              Create a Recipe
            </Button>
          </Link>
        </HStack>
      </Flex>

      {/* Featured Recipes Section */}
      <Box p={8}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Featured Recipes
        </Heading>
        {loading ? (
          <Box textAlign="center">
            <Spinner size="xl" />
          </Box>
        ) : error ? (
          <Box textAlign="center">
            <Text color="red.500">{error}</Text>
          </Box>
        ) : (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </SimpleGrid>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
