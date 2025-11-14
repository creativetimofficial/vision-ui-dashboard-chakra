import React, { useState, useMemo, useRef, useCallback } from 'react';
import { Box, Heading, SimpleGrid, Input, Select, VStack, Spinner, Text, Button } from '@chakra-ui/react';
import RecipeCard from '../components/RecipeCard/RecipeCard';
import { useRecipes } from '../hooks/useRecipes';

const RecipeLibraryPage = () => {
  const { recipes, loading, error, hasMore, fetchRecipes } = useRecipes();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const page = useRef(0);

  const handleLoadMore = () => {
    page.current += 1;
    fetchRecipes(page.current);
  };

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const searchMatch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
      const filterMatch = filter === 'all' || recipe.camera_model === filter;
      return searchMatch && filterMatch;
    });
  }, [recipes, searchTerm, filter]);

  if (loading && page.current === 0) {
    return (
      <Box textAlign="center" mt={10}>
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" mt={10}>
        <Text color="red.500">{error}</Text>
      </Box>
    );
  }

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8} textAlign="center">
        Recipe Library
      </Heading>
      <VStack spacing={4} mb={8}>
        <Input
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Cameras</option>
          <option value="Sony a7 III">Sony a7 III</option>
          <option value="Sony a7S III">Sony a7S III</option>
          <option value="Sony a6400">Sony a6400</option>
        </Select>
      </VStack>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </SimpleGrid>
      {hasMore && (
        <Box textAlign="center" mt={8}>
          <Button onClick={handleLoadMore} isLoading={loading}>
            Load More
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default RecipeLibraryPage;
