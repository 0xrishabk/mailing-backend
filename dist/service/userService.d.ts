declare const getUsers: () => Promise<{
    username: string;
    email: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
}[]>;
declare const getUser: (id: string) => Promise<{
    username: string;
    email: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const createUser: (username: string, email: string, inputPassword: string) => Promise<{
    username: string;
    email: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const updateUsername: (id: string, username: string) => Promise<{
    updatedAt: Date;
}>;
declare const updateEmail: (id: string, email: string) => Promise<{
    updatedAt: Date;
}>;
declare const updatePassword: (id: string, currentPassword: string, newPassword: string) => Promise<{
    updatedAt: Date;
}>;
declare const loginUser: (email: string, inputPassword: string) => Promise<{
    token: string;
    username: string;
    email: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    permission: number;
    role: import("@prisma/client").$Enums.Role;
}>;
declare const deleteUser: (id: string) => Promise<void>;
export { getUsers, getUser, createUser, loginUser, updateUsername, updateEmail, updatePassword, deleteUser };
//# sourceMappingURL=userService.d.ts.map