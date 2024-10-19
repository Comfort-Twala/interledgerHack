//related to all current payments that need to be done on the platform
export interface Payment {
    id: number; 
    name: string;
    inital_amount: string;
    remaining_amount: string;
    monthly_payment: string; 
    start_date: string;
    end_date: string;
  }
  