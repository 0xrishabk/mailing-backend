declare const getContacts: () => Promise<{
    studentContacts: {
        email: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        phone: string;
        facultyId: number;
        batchId: number;
    }[];
    teacherContacts: {
        email: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        phone: string;
        status: import("@prisma/client").$Enums.EmployeeStatus;
    }[];
    managementContacts: {
        email: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        phone: string;
        status: import("@prisma/client").$Enums.EmployeeStatus;
    }[];
}>;
declare const getStudentContacts: () => Promise<{
    email: string;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    phone: string;
    facultyId: number;
    batchId: number;
}[]>;
declare const getTeacherContacts: () => Promise<{
    email: string;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    phone: string;
    status: import("@prisma/client").$Enums.EmployeeStatus;
}[]>;
declare const getManagementContacts: () => Promise<{
    email: string;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    phone: string;
    status: import("@prisma/client").$Enums.EmployeeStatus;
}[]>;
export { getContacts, getStudentContacts, getTeacherContacts, getManagementContacts };
//# sourceMappingURL=contactService.d.ts.map