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
} as const;

export type Permission = typeof Permission[keyof typeof Permission];

export const PermissionUtil = {
  has(userPerms: number, perm: number): boolean {
    return (userPerms & perm) === perm;
  },

  add(userPerms: number, perm: number): number {
    return userPerms | perm;
  },

  remove(userPerms: number, perm: number): number {
    return userPerms & ~perm;
  },

  reset(): number {
    return Permission.Read;
  },

  list(userPerms: number): string[] {
    return Object.entries(Permission)
      .filter(([_key, value]) => typeof value === "number")
      .filter(([_key, value]) => (userPerms & value) === value)
      .map(([key, _value]) => key);
  },
};
