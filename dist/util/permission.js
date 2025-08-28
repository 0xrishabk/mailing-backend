export const Permission = {
    Read: 1 << 0,
    Mail: 1 << 1,
    Announcement: 1 << 2,
    CreateUser: 1 << 3,
    UpdateUser: 1 << 4,
    DeleteUser: 1 << 5,
    Student: 1 << 0,
    Teacher: (1 << 0) | (1 << 1),
    Management: (1 << 0) | (1 << 1) | (1 << 2),
    Admin: (1 << 0) | (1 << 1) | (1 << 2) | (1 << 3) | (1 << 4) | (1 << 5),
};
export const PermissionUtil = {
    has(userPerms, perm) {
        return (userPerms & perm) === perm;
    },
    add(userPerms, perm) {
        return userPerms | perm;
    },
    remove(userPerms, perm) {
        return userPerms & ~perm;
    },
    reset() {
        return Permission.Read;
    },
    list(userPerms) {
        return Object.entries(Permission)
            .filter(([_key, value]) => typeof value === "number")
            .filter(([_key, value]) => (userPerms & value) === value)
            .map(([key, _value]) => key);
    },
};
//# sourceMappingURL=permission.js.map