export const __esModule: boolean;
export namespace Prisma {
    namespace TransactionIsolationLevel {
        let ReadUncommitted: string;
        let ReadCommitted: string;
        let RepeatableRead: string;
        let Serializable: string;
    }
    namespace UserScalarFieldEnum {
        let id: string;
        let username: string;
        let email: string;
        let password: string;
        let permission: string;
        let role: string;
        let createdAt: string;
        let updatedAt: string;
    }
    namespace BatchScalarFieldEnum {
        let id_1: string;
        export { id_1 as id };
        export let year: string;
    }
    namespace FacultyScalarFieldEnum {
        let id_2: string;
        export { id_2 as id };
        export let name: string;
    }
    namespace ContactStudentsScalarFieldEnum {
        let id_3: string;
        export { id_3 as id };
        let name_1: string;
        export { name_1 as name };
        let email_1: string;
        export { email_1 as email };
        export let phone: string;
        export let facultyId: string;
        export let batchId: string;
        let createdAt_1: string;
        export { createdAt_1 as createdAt };
        let updatedAt_1: string;
        export { updatedAt_1 as updatedAt };
    }
    namespace ContactTeachersScalarFieldEnum {
        let id_4: string;
        export { id_4 as id };
        let name_2: string;
        export { name_2 as name };
        let email_2: string;
        export { email_2 as email };
        let phone_1: string;
        export { phone_1 as phone };
        export let status: string;
        let createdAt_2: string;
        export { createdAt_2 as createdAt };
        let updatedAt_2: string;
        export { updatedAt_2 as updatedAt };
    }
    namespace ContactManagementScalarFieldEnum {
        let id_5: string;
        export { id_5 as id };
        let name_3: string;
        export { name_3 as name };
        let email_3: string;
        export { email_3 as email };
        let phone_2: string;
        export { phone_2 as phone };
        let status_1: string;
        export { status_1 as status };
        let createdAt_3: string;
        export { createdAt_3 as createdAt };
        let updatedAt_3: string;
        export { updatedAt_3 as updatedAt };
    }
    namespace MailingScalarFieldEnum {
        let id_6: string;
        export { id_6 as id };
        export let replyTo: string;
        export let subject: string;
        export let content: string;
        let createdAt_4: string;
        export { createdAt_4 as createdAt };
    }
    namespace RecipientScalarFieldEnum {
        let id_7: string;
        export { id_7 as id };
        export let mailingId: string;
        let email_4: string;
        export { email_4 as email };
        let status_2: string;
        export { status_2 as status };
    }
    namespace TokenScalarFieldEnum {
        export let token: string;
        export let isValid: string;
        let createdAt_5: string;
        export { createdAt_5 as createdAt };
        let updatedAt_4: string;
        export { updatedAt_4 as updatedAt };
    }
    namespace SortOrder {
        let asc: string;
        let desc: string;
    }
    namespace QueryMode {
        let _default: string;
        export { _default as default };
        export let insensitive: string;
    }
    namespace ModelName {
        let User: string;
        let Batch: string;
        let Faculty: string;
        let ContactStudents: string;
        let ContactTeachers: string;
        let ContactManagement: string;
        let Mailing: string;
        let Recipient: string;
        let Token: string;
    }
}
export namespace $Enums {
    namespace Role {
        let STUDENT: string;
        let TEACHER: string;
        let MANAGEMENT: string;
        let ADMIN: string;
    }
    namespace EmployeeStatus {
        let INACTIVE: string;
        let ACTIVE: string;
        let LEFT: string;
        let ON_BREAK: string;
    }
    namespace MailingStatus {
        let SENT: string;
        let ERROR: string;
    }
}
export namespace Role {
    let STUDENT_1: string;
    export { STUDENT_1 as STUDENT };
    let TEACHER_1: string;
    export { TEACHER_1 as TEACHER };
    let MANAGEMENT_1: string;
    export { MANAGEMENT_1 as MANAGEMENT };
    let ADMIN_1: string;
    export { ADMIN_1 as ADMIN };
}
export namespace EmployeeStatus {
    let INACTIVE_1: string;
    export { INACTIVE_1 as INACTIVE };
    let ACTIVE_1: string;
    export { ACTIVE_1 as ACTIVE };
    let LEFT_1: string;
    export { LEFT_1 as LEFT };
    let ON_BREAK_1: string;
    export { ON_BREAK_1 as ON_BREAK };
}
export namespace MailingStatus {
    let SENT_1: string;
    export { SENT_1 as SENT };
    let ERROR_1: string;
    export { ERROR_1 as ERROR };
}
export namespace Prisma {
    export namespace prismaVersion {
        let client: string;
        let engine: string;
    }
    export function PrismaClientKnownRequestError(): never;
    export function PrismaClientUnknownRequestError(): never;
    export function PrismaClientRustPanicError(): never;
    export function PrismaClientInitializationError(): never;
    export function PrismaClientValidationError(): never;
    export { Decimal };
    /**
     * Re-export of sql-template-tag
     */
    export function sql(): never;
    export function empty(): never;
    export function join(): never;
    export function raw(): never;
    export let validator: typeof Public.validator;
    /**
    * Extensions
    */
    export function getExtensionContext(): never;
    export function defineExtension(): never;
    export let DbNull: {
        #private: any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    export let JsonNull: {
        #private: any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    export let AnyNull: {
        #private: any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    export namespace NullTypes {
        let DbNull_1: {
            new (arg?: symbol): {
                #private: any;
                _getNamespace(): string;
                _getName(): string;
                toString(): string;
            };
        };
        export { DbNull_1 as DbNull };
        let JsonNull_1: {
            new (arg?: symbol): {
                #private: any;
                _getNamespace(): string;
                _getName(): string;
                toString(): string;
            };
        };
        export { JsonNull_1 as JsonNull };
        let AnyNull_1: {
            new (arg?: symbol): {
                #private: any;
                _getNamespace(): string;
                _getName(): string;
                toString(): string;
            };
        };
        export { AnyNull_1 as AnyNull };
    }
}
/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
export class PrismaClient {
}
import { Decimal } from "./runtime/index-browser.js";
import { Public } from "./runtime/index-browser.js";
//# sourceMappingURL=index-browser.d.ts.map