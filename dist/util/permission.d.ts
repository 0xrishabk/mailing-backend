export declare const Permission: {
    readonly Read: number;
    readonly Mail: number;
    readonly Announcement: number;
    readonly CreateUser: number;
    readonly UpdateUser: number;
    readonly DeleteUser: number;
    readonly Student: number;
    readonly Teacher: number;
    readonly Management: number;
    readonly Admin: number;
};
export type Permission = typeof Permission[keyof typeof Permission];
export declare const PermissionUtil: {
    has(userPerms: number, perm: number): boolean;
    add(userPerms: number, perm: number): number;
    remove(userPerms: number, perm: number): number;
    reset(): number;
    list(userPerms: number): string[];
};
//# sourceMappingURL=permission.d.ts.map