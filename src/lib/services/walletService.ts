import supabase from "../utils/databaseConfig";
import { Wallet } from "../models/Wallet";

class WalletService {
    async createWallet(wallet: Omit<Wallet, 'id'>): Promise<Wallet | null> {
        const { data, error } = await supabase.from('wallet').insert([wallet]);
        if (error || data == null) return null;
        return data[0] as Wallet;
    }

    async getWallets(): Promise<Wallet[]> {
        const { data, error } = await supabase.from('wallet').select('*');
        if (error) return [];
        return data as Wallet[];
    }

    async getWalletById(id: number): Promise<Wallet | null> {
        const { data, error } = await supabase.from('wallet').select('*').eq('id', id).single();
        if (error) return null;
        return data as Wallet;
    }

    async updateWallet(id: number, updates: Partial<Omit<Wallet, 'id'>>): Promise<Wallet | null> {
        const { data, error } = await supabase.from('wallet').update(updates).eq('id', id);
        if (error || data == null) return null;
        return data[0] as Wallet;
    }
}

const walletService = new WalletService();
export default walletService;
