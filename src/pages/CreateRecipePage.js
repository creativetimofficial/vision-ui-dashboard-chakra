import React, { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
  VStack,
  SimpleGrid,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useToast,
} from '@chakra-ui/react';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../services/supabase';
import { useHistory } from 'react-router-dom';

const CreateRecipePage = () => {
  const { user } = useAuth();
  const history = useHistory();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState({
    name: '',
    description: '',
    camera_model: '',
    white_balance: {
      temperature: 5600,
      tint: 0,
    },
    picture_profile: {
      gamma: 'Cine4',
      black_level: 0,
      detail: 0,
      color_mode: 'Pro',
      saturation: 0,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prev) => ({ ...prev, [name]: value }));
  };

  const handleNestedChange = (category, name, value) => {
    setRecipe((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      toast({
        title: 'You must be logged in to create a recipe.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('recipes')
        .insert([{ ...recipe, user_id: user.id }]);
      if (error) throw error;
      toast({
        title: 'Recipe created successfully.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      history.push(`/recipes/${data[0].id}`);
    } catch (error) {
      toast({
        title: 'Error creating recipe.',
        description: error.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8} textAlign="center">
        Create a New Recipe
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={8}>
          <FormControl isRequired>
            <FormLabel>Recipe Name</FormLabel>
            <Input name="name" value={recipe.name} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea name="description" value={recipe.description} onChange={handleChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Camera Model</FormLabel>
            <Select name="camera_model" value={recipe.camera_model} onChange={handleChange}>
              <option value="">Select a camera</option>
              <option value="Sony a7 III">Sony a7 III</option>
              <option value="Sony a7S III">Sony a7S III</option>
              <option value="Sony a6400">Sony a6400</option>
            </Select>
          </FormControl>

          <Heading as="h2" size="lg">
            White Balance
          </Heading>
          <SimpleGrid columns={2} spacing={4} w="full">
            <FormControl>
              <FormLabel>Temperature</FormLabel>
              <NumberInput
                value={recipe.white_balance.temperature}
                onChange={(val) => handleNestedChange('white_balance', 'temperature', val)}
                step={100}
                min={2500}
                max={9900}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl>
              <FormLabel>Tint</FormLabel>
              <NumberInput
                value={recipe.white_balance.tint}
                onChange={(val) => handleNestedChange('white_balance', 'tint', val)}
                min={-50}
                max={50}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </SimpleGrid>

          <Heading as="h2" size="lg">
            Picture Profile
          </Heading>
          <SimpleGrid columns={2} spacing={4} w="full">
            {Object.entries(recipe.picture_profile).map(([key, value]) => (
              <FormControl key={key}>
                <FormLabel>{key.replace('_', ' ')}</FormLabel>
                <Input
                  name={key}
                  value={value}
                  onChange={(e) => handleNestedChange('picture_profile', e.target.name, e.target.value)}
                />
              </FormControl>
            ))}
          </SimpleGrid>

          <Button type="submit" colorScheme="teal" size="lg">
            Save Recipe
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default CreateRecipePage;
