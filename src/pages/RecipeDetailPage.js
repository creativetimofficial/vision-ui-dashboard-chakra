import React from 'react';
import { Box, Heading, Text, VStack, Spinner, Button, useToast, HStack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ParameterTable from '../components/ParameterTable/ParameterTable';
import ImageComparisonSlider from '../components/ImageComparisonSlider/ImageComparisonSlider';
import { useRecipe } from '../hooks/useRecipe';
import { useFavorites } from '../hooks/useFavorites';
import { useAuth } from '../hooks/useAuth';

const RecipeDetailPage = () => {
  const { id } = useParams();
  const { recipe, loading, error } = useRecipe(id);
  const { user } = useAuth();
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const toast = useToast();

  const isFavorited = favorites.includes(recipe?.id);

  const handleFavorite = async () => {
    if (!user) {
      toast({
        title: 'You must be logged in to favorite a recipe.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (isFavorited) {
      await removeFavorite(recipe.id);
      toast({
        title: 'Recipe removed from favorites.',
        status: 'info',
        duration: 3000,
        isClosable: true,
      });
    } else {
      await addFavorite(recipe.id);
      toast({
        title: 'Recipe added to favorites.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  if (loading) {
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

  if (!recipe) {
    return (
      <Box textAlign="center" mt={10}>
        <Text>Recipe not found.</Text>
      </Box>
    );
  }

  return (
    <Box p={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">
          {recipe.name}
        </Heading>
        <Text fontSize="lg" color="gray.500">
          {recipe.description}
        </Text>
        <ImageComparisonSlider
          beforeImage={recipe.image_url} // Assuming the same image for before/after for now
          afterImage={recipe.image_url}
        />
        <HStack>
          <Button onClick={handleFavorite} colorScheme={isFavorited ? 'red' : 'gray'}>
            {isFavorited ? 'Unfavorite' : 'Favorite'}
          </Button>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              toast({
                title: 'Link copied to clipboard.',
                status: 'success',
                duration: 3000,
                isClosable: true,
              });
            }}
          >
            Share
          </Button>
        </HStack>
        <ParameterTable
          whiteBalance={recipe.white_balance}
          pictureProfile={recipe.picture_profile}
        />
      </VStack>
    </Box>
  );
};

export default RecipeDetailPage;
