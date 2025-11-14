import { useState, useEffect } from 'react';
import { supabase } from '../services/supabase';

/**
 * Custom hook to fetch a single recipe by its ID from Supabase.
 * @param {string} id The ID of the recipe to fetch.
 * @returns {object} An object containing the recipe, loading state, and error state.
 */
export const useRecipe = (id) => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      if (!id) return;
      try {
        const { data, error } = await supabase
          .from('recipes')
          .select('*')
          .eq('id', id)
          .single();
        if (error) {
          throw error;
        }
        setRecipe(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  return { recipe, loading, error };
};
