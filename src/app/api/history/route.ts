/* eslint-disable @typescript-eslint/no-unused-vars */
import { sendResponse } from "@/lib/utils/response";
import HistoryService from "@/lib/services/historyService";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
        try {
            const history = await HistoryService.getHistoryById(parseInt(id));
            return sendResponse(history, 200, null);
        } catch (error) {
            return sendResponse(null, 500, 'Internal Server Error');
        }
    }

    try {
        const histories = await HistoryService.getHistories();
        return sendResponse(histories, 200, null);
    } catch (error) {
        return sendResponse(null, 500, 'Internal Server Error');
    }
}

export async function POST(request: Request) {
    try {
        const history = await request.json();
        const createdHistory = await HistoryService.createHistory(history);
        return sendResponse(createdHistory, 201, null);
    } catch (error) {
        return sendResponse(null, 400, 'Failed to create history');
    }
}