import { asyncHandler } from "../util/asyncHandler.js";
import { getContacts, getStudentContacts, getTeacherContacts, getManagementContacts } from "../service/contactService.js";
const getContactsHandler = asyncHandler(async (_req, res) => {
    const contacts = await getContacts();
    const response = {
        success: true,
        message: "Successfully fetched batches.",
        data: contacts,
        timestamp: new Date().toISOString(),
    };
    return res.status(200).json(response);
});
const getStudentContactsHandler = asyncHandler(async (_req, res) => {
    const contacts = await getStudentContacts();
    const response = {
        success: true,
        message: "Successfully fetched students contact.",
        data: contacts,
        timestamp: new Date().toISOString(),
    };
    return res.status(200).json(response);
});
const getTeacherContactsHandler = asyncHandler(async (_req, res) => {
    const contacts = await getTeacherContacts();
    const response = {
        success: true,
        message: "Successfully fetched teachers contact.",
        data: contacts,
        timestamp: new Date().toISOString(),
    };
    return res.status(200).json(response);
});
const getManagementContactsHandler = asyncHandler(async (_req, res) => {
    const contacts = await getManagementContacts();
    const response = {
        success: true,
        message: "Successfully fetched management contacts.",
        data: contacts,
        timestamp: new Date().toISOString(),
    };
    return res.status(200).json(response);
});
export { getContactsHandler, getStudentContactsHandler, getTeacherContactsHandler, getManagementContactsHandler };
//# sourceMappingURL=contactController.js.map