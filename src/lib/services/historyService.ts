import supabase from "../utils/databaseConfig";

class HistoryService {
    async createHistory(history: Omit<History, 'id'>): Promise<History | null> {
        const { data, error } = await supabase.from('history').insert([history]);
        if (error || data == null) return null;
        return data[0] as History;
    }

    async getHistories(): Promise<History[]> {
        const { data, error } = await supabase.from('history').select('*');
        if (error) return [];
        return data as History[];
    }

    async getHistoryById(id: number): Promise<History | null> {
        const { data, error } = await supabase.from('history').select('*').eq('id', id).single();
        if (error) return null;
        return data as History;
    }
}

const historyService = new HistoryService();
export default historyService;
