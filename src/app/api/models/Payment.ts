//related to all current payments that need to be done on the platform
export interface Payment {
    id: number; 
    name: string;
    inital_amount: number;
    remaining_amount: number;
    monthly_payment: number; 
    start_date: string;
    end_date: string;
    payment_ref_user: number;
  }
  