import supabase from "../utils/databaseConfig";
import { Payment } from "../models/Payment";

class PaymentService {
    async createPayment(payment: Omit<Payment, 'id'>): Promise<Payment | null> {
        const { data, error } = await supabase.from('payment').insert([payment]);
        if (error || data == null) return null;
        return data[0] as Payment;
    }

    async getPayments(): Promise<Payment[]> {
        const { data, error } = await supabase.from('payment').select('*');
        if (error) return [];
        return data as Payment[];
    }

    async getPaymentById(id: number): Promise<Payment | null> {
        const { data, error } = await supabase.from('payment').select('*').eq('id', id).single();
        if (error) return null;
        return data as Payment;
    }

    async updatePayment(id: number, updates: Partial<Omit<Payment, 'id'>>): Promise<Payment | null> {
        const { data, error } = await supabase.from('payment').update(updates).eq('id', id);
        if (error || data == null) return null;
        return data[0] as Payment;
    }

    async deletePayment(id: number): Promise<boolean> {
        const { error } = await supabase.from('payment').delete().eq('id', id);
        return !error;
    }
}

const paymentService = new PaymentService(); 
export default paymentService;
