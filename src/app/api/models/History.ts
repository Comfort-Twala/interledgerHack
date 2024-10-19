//history of all payments made through the application
export interface History {
    id: number; 
    amount: string;
    date: string;
    reference: string; 
    history_ref_user: number;
  }
  