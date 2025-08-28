import prisma from "../database/prisma.js";
import { NotFoundError } from "../errors/AppError.js";

const getContacts = async () => {
  const [studentContacts, teacherContacts, managementContacts] = await Promise.all([
    prisma.contactStudents.findMany(),
    prisma.contactTeachers.findMany(),
    prisma.contactManagement.findMany(),
  ]);
  const data = { studentContacts, teacherContacts, managementContacts };
  const allEmpty = Object.values(data).every(
    (val) => !val || (Array.isArray(val) && val.length == 0)
  );
  if (allEmpty) {
    throw new NotFoundError("No data for students, teachers & management was found.");
  }
  return data;
};

const getStudentContacts = async () => {
  const studentContacts = await prisma.contactStudents.findMany();
  if (studentContacts.length == 0) {
    throw new NotFoundError("No students were found.");
  }
  return studentContacts;
};

const getTeacherContacts = async () => {
  const teacherContacts = await prisma.contactTeachers.findMany();
  if (teacherContacts.length == 0) {
    throw new NotFoundError("No teachers were found.");
  }
  return teacherContacts;
};

const getManagementContacts = async () => {
  const managementContacts = await prisma.contactManagement.findMany();
  if (managementContacts.length == 0) {
    throw new NotFoundError("No management were found.");
  }
  return managementContacts;
};

export { getContacts, getStudentContacts, getTeacherContacts, getManagementContacts };