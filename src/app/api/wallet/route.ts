/* eslint-disable @typescript-eslint/no-unused-vars */
import { sendResponse } from "@/lib/utils/response";
import WalletService from "@/lib/services/walletService";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
        try {
            const wallet = await WalletService.getWalletById(parseInt(id));
            return sendResponse(wallet, 200, null);
        } catch (error) {
            return sendResponse(null, 500, 'Internal Server Error');
        }
    }

    try {
        const wallets = await WalletService.getWallets();
        return sendResponse(wallets, 200, null);
    } catch (error) {
        return sendResponse(null, 500, 'Internal Server Error');
    }
}

export async function POST(request: Request) {
    try {
        const wallet = await request.json();
        const createdWallet = await WalletService.createWallet(wallet);
        return sendResponse(createdWallet, 201, null);
    } catch (error) {
        return sendResponse(null, 400, 'Failed to create wallet');
    }
}

export async function PUT(request: Request) {
    const { id } = await request.json();
    try {
        const walletData = await request.json();
        const updatedWallet = await WalletService.updateWallet(id, walletData);
        return sendResponse(updatedWallet, 200, null);
    } catch (error) {
        return sendResponse(null, 400, 'Failed to update wallet');
    }
}
