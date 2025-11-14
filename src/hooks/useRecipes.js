import { useState, useEffect } from 'react';
import { supabase } from '../services/supabase'; // Adjust path as needed

const RECIPES_PER_PAGE = 6;

/**
 * Custom hook to fetch recipes from Supabase with pagination.
 * @returns {object} An object containing the recipes, loading state, error state, whether there are more recipes to fetch, and a function to fetch more recipes.
 */
export const useRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchRecipes = async (page) => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('recipes')
        .select('*')
        .range(page * RECIPES_PER_PAGE, (page + 1) * RECIPES_PER_PAGE - 1);
      if (error) {
        throw error;
      }
      setRecipes((prev) => (page === 0 ? data : [...prev, ...data]));
      setHasMore(data.length === RECIPES_PER_PAGE);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes(0);
  }, []);

  return { recipes, loading, error, hasMore, fetchRecipes };
};
