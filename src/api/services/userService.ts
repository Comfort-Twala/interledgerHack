import { User } from '../models/User';
import supabase from '../utils/databaseConfig';

export const createUser = async (user: Omit<User, 'id'>) => {
  const { data, error } = await supabase
    .from('User')
    .insert([user]); // No created_at or updated_at

  if (error) throw error;
  return data;
};

export const getUserById = async (id: number) => {
  const { data, error } = await supabase
    .from('User')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
};

export const updateUser = async (id: number, updates: Partial<Omit<User, 'id'>>) => {
  const { data, error } = await supabase
    .from('User')
    .update(updates)
    .eq('id', id);

  if (error) throw error;
  return data;
};

export const deleteUser = async (id: number) => {
  const { data, error } = await supabase
    .from('User')
    .delete()
    .eq('id', id);

  if (error) throw error;
  return data;
};
