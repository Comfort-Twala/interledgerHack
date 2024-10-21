/* eslint-disable @typescript-eslint/no-unused-vars */
import PaymentService from "@/lib/services/paymentService";
import { sendResponse } from "@/lib/utils/response";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
        try {
            const payment = await PaymentService.getPaymentById(parseInt(id));
            return sendResponse(payment, 200, null);
        } catch (error) {
            return sendResponse(null, 500, 'Internal Server Error');
        }
    }

    try {
        const payments = await PaymentService.getPayments();
        return sendResponse(payments, 200, null);
    } catch (error) {
        return sendResponse(null, 500, 'Internal Server Error');
    }
}

export async function POST(request: Request) {
    try {
        const payment = await request.json();
        const createdPayment = await PaymentService.createPayment(payment);
        return sendResponse(createdPayment, 201, null);
    } catch (error) {
        return sendResponse(null, 400, 'Failed to create payment');
    }
}

export async function PUT(request: Request) {
    const { id } = await request.json();
    try {
        const paymentData = await request.json();
        const updatedPayment = await PaymentService.updatePayment(id, paymentData);
        return sendResponse(updatedPayment, 200, null);
    } catch (error) {
        return sendResponse(null, 400, 'Failed to update payment');
    }
}
