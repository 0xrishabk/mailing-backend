import { createUserSchema, deleteUserSchema, loginUserSchema } from "../model/UserModel.js";
import { ValidationError } from "../errors/AppError.js";
import { asyncHandler } from "../util/asyncHandler.js";
import { getUser, createUser, deleteUser, loginUser, getUsers, updateUsername, updateEmail, updatePassword } from "../service/userService.js";
import z from "zod";
const getUsersHandler = asyncHandler(async (_req, res) => {
    const users = await getUsers();
    const response = {
        success: true,
        message: "Successfully fetched users.",
        data: users,
        timestamp: new Date().toISOString(),
    };
    return res.status(200).json(response);
});
const getUserHandler = asyncHandler(async (req, res) => {
    const result = z.object({
        id: z.uuid()
    }).safeParse(req.params);
    if (!result.success) {
        throw new ValidationError("Invalid input data to get a user. Please ensure parameters  are valid.");
    }
    const user = await getUser(result.data.id);
    const response = {
        success: true,
        message: "Successfully fetched user.",
        data: user,
        timestamp: new Date().toISOString(),
    };
    return res.status(200).json(response);
});
const createUserHandler = asyncHandler(async (req, res) => {
    const result = createUserSchema.safeParse(req.body);
    if (!result.success) {
        throw new ValidationError("Invalid input data to create user. Please ensure inputs are valid.");
    }
    const { username, email, inputPassword } = result.data;
    const user = await createUser(username, email, inputPassword);
    const response = {
        success: true,
        message: "Successfully created user.",
        data: user,
        timestamp: new Date().toISOString(),
    };
    return res.status(201).json(response);
});
const loginUserHandler = asyncHandler(async (req, res) => {
    const result = loginUserSchema.safeParse(req.body);
    if (!result.success) {
        throw new ValidationError("Invalid email or password.");
    }
    const data = await loginUser(result.data.email, result.data.inputPassword);
    const response = {
        success: true,
        message: "Successfully logged in.",
        data,
        timestamp: new Date().toISOString(),
    };
    return res.status(200).json(response);
});
const updateUserHandler = asyncHandler(async (req, res) => {
    const result = z.object({
        id: z.uuid(),
        username: z.string().optional(),
        email: z.string().optional(),
        currentPassword: z.string().optional(),
        newPassword: z.string().optional(),
    }).safeParse(req.body);
    if (!result.success) {
        throw new ValidationError("Invalid input body.");
    }
    const { id, username, email, currentPassword, newPassword } = result.data;
    if ((id == undefined || id == "") && (username == undefined || username == "") && (email == undefined || email == "") &&
        (currentPassword == undefined || currentPassword == "") && (newPassword == undefined || newPassword == "")) {
        throw new ValidationError("Please provide an input body.");
    }
    if (username != undefined || username != "") {
        await updateUsername(id, username);
    }
    if (email != undefined || email != "") {
        await updateEmail(id, email);
    }
    if (currentPassword != undefined || currentPassword != "") {
        if (newPassword == undefined || newPassword == "") {
            throw new ValidationError("Please supply new password.");
        }
        await updatePassword(id, currentPassword, newPassword);
    }
    const response = {
        success: true,
        message: "Successfully updated user data.",
        data: {
            username,
            email,
            currentPassword,
            newPassword,
        },
        timestamp: new Date().toISOString(),
    };
    return res.status(200).json(response);
});
const deleteUserHandler = asyncHandler(async (req, res) => {
    const result = deleteUserSchema.safeParse(req.params);
    if (!result.success) {
        throw new ValidationError("Invalid USERID must be an UUID.");
    }
    await deleteUser(result.data.id);
    return res.sendStatus(204);
});
export { getUsersHandler, getUserHandler, createUserHandler, loginUserHandler, updateUserHandler, deleteUserHandler, };
//# sourceMappingURL=userController.js.map