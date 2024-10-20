/* eslint-disable @typescript-eslint/no-unused-vars */
import { sendResponse } from "../utils/response";
import UserService from "../services/userService";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
        try {
            const user = await UserService.getUserById(parseInt(id));
            return sendResponse(user, 200, null);
        } catch (error) {
            return sendResponse(null, 500, 'Internal Server Error');
        }
    }

    try {
        const users = await UserService.getUsers();
        return sendResponse(users, 200, null);
    } catch (error) {
        return sendResponse(null, 500, 'Internal Server Error');
    }
}

export async function POST(request: Request) {
    try {
        const user = await request.json();
        const createdUser = await UserService.createUser(user);
        return sendResponse(createdUser, 201, null);
    } catch (error) {
        return sendResponse(null, 400, 'Failed to create user');
    }
}

export async function PUT(request: Request) {
    const { id } = await request.json();
    try {
        const userData = await request.json();
        const updatedUser = await UserService.updateUser(id, userData);
        return sendResponse(updatedUser, 200, null);
    } catch (error) {
        return sendResponse(null, 400, 'Failed to update user');
    }
}
