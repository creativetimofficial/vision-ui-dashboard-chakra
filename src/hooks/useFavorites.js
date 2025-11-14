import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../services/supabase';
import { useAuth } from './useAuth';

export const useFavorites = () => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFavorites = useCallback(async () => {
    if (!user) return;
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('favorites')
        .select('recipe_id')
        .eq('user_id', user.id);
      if (error) throw error;
      setFavorites(data.map((fav) => fav.recipe_id));
    } catch (error) {
      console.error('Error fetching favorites:', error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  const addFavorite = async (recipe_id) => {
    if (!user) return;
    try {
      const { error } = await supabase
        .from('favorites')
        .insert([{ user_id: user.id, recipe_id }]);
      if (error) throw error;
      setFavorites((prev) => [...prev, recipe_id]);
    } catch (error) {
      console.error('Error adding favorite:', error);
    }
  };

  const removeFavorite = async (recipe_id) => {
    if (!user) return;
    try {
      const { error } = await supabase
        .from('favorites')
        .delete()
        .eq('user_id', user.id)
        .eq('recipe_id', recipe_id);
      if (error) throw error;
      setFavorites((prev) => prev.filter((id) => id !== recipe_id));
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  };

  return { favorites, addFavorite, removeFavorite, loading };
};
