// services/userService.ts
import supabase from "../utils/databaseConfig";
import { User } from "../models/User";

class UserService {
    async getUsers(): Promise<User[]> {
        const { data, error } = await supabase
            .from('user')
            .select('*');

        if (error) throw new Error(error.message);
        return data as User[];
    }

    async getUserById(id: number): Promise<User | null> {
        const { data, error } = await supabase
            .from('user')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw new Error(error.message);
        return data as User | null;
    }

    async createUser(user: Omit<User, 'id'>): Promise<User> {
        const { data, error } = await supabase
            .from('user')
            .insert([user])
            .select();

        console.log(data)
        if (error) throw new Error(error.message);
        return data[0] as User;
    }

    async updateUser(id: number, userData: Partial<User>): Promise<User> {
        const { data, error } = await supabase
            .from('user')
            .update(userData)
            .eq('id', id)
            .select();

        if (error) throw new Error(error.message);
        return data[0] as User;
    }
}

const userService = new UserService();
export default userService;
