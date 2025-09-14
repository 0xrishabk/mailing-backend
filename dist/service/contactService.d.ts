import { ContactType } from "@prisma/client";
declare const createContact: (name: string, email: string, phone: string, type: ContactType) => Promise<{
    type: import("@prisma/client").$Enums.ContactType;
    email: string;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    phone: string;
}>;
declare const getContacts: (type: "ADMIN" | "STUDENT" | "MANAGEMENT" | "TEACHER" | undefined) => Promise<{
    type: import("@prisma/client").$Enums.ContactType;
    email: string;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    phone: string;
}[]>;
export { createContact, getContacts, };
//# sourceMappingURL=contactService.d.ts.map