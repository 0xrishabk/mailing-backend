import prisma from "../database/prisma"
import { NotFoundError } from "../errors/AppError";

const getFaculties = async () => {
  const faculties = await prisma.faculty.findMany();
  if (faculties.length === 0) {
    throw new NotFoundError("There were no faculties to return in the record.");
  }
  return faculties;
};

const createFaculty = async (name: string) => {
  const faculty = await prisma.faculty.create({
    data: {
      name,
    },
  });
  return faculty;
};

export { createFaculty, getFaculties };