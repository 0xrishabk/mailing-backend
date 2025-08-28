import prisma from "../database/prisma.js"
import { NotFoundError, ValidationError } from "../errors/AppError.js";
import { Prisma } from "../generated/prisma/index.js";
import { comparePassword, hashPassword } from "../util/password.js"
import type { LoginPayload } from "../model/JwtPayloadModel.js";
import { signJwt } from "../util/jwt.js";

const getUsers = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      username: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  if (users.length == 0) {
    throw new NotFoundError("No users were found in the database");
  }
  return users;
};

const getUser = async (id: string) => {
  const user = await prisma.user.findFirst({
    where: {
      id
    },
    select: {
      id: true,
      username: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!user) {
    throw new ValidationError("No user found.");
  }
  return user;
};

const createUser = async (username: string, email: string, inputPassword: string) => {
  const hashedPassword = await hashPassword(inputPassword);
  const user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
    select: {
      id: true,
      username: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return user;
};

const updateUsername = async (id: string, username: string) => {
  const result = await prisma.user.update({
    data: {
      username,
    },
    where: {
      id,
    },
    select: {
      updatedAt: true,
    },
  });
  return result;
};

const updateEmail = async (id: string, email: string) => {
  const result = await prisma.user.update({
    data: {
      email,
    },
    where: {
      id,
    },
    select: {
      updatedAt: true,
    },
  });
  return result;
};

const updatePassword = async (id: string, currentPassword: string, newPassword: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      password: true,
    }
  });

  if (!user) {
    throw new NotFoundError("Invalid user.")
  }

  if (!comparePassword(currentPassword, user.password)) {
    throw new ValidationError("Current password is incorrect.");
  }
  const hashedPassword = await hashPassword(newPassword);
  const result = await prisma.user.update({
    data: {
      password: hashedPassword,
    },
    where: {
      id
    },
    select: {
      updatedAt: true,
    }
  });
  return result;
};

const loginUser = async (email: string, inputPassword: string) => {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    throw new ValidationError("Invalid email or password.");
  }

  if (!comparePassword(inputPassword, user.password)) {
    throw new ValidationError("Invalid email or password.");
  }

  const payload: LoginPayload = {
    iss: "127.0.0.1:3000",
    sub: user.id,
    aud: "mailing-app",
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 60 * 15,
    access: 4,
    email: user.email,
    username: user.username,
  };
  const token = signJwt(payload);

  const { password, ...safeUser } = user;

  return { ...safeUser, token };
};

const deleteUser = async (id: string) => {
  try {
    await prisma.user.delete({
      where: {
        id,
      },
    });
  } catch (err: any) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code == 'P2025') {
        throw new NotFoundError("User not found.");
      }
    }
    throw err;
  }
};

export { getUsers, getUser, createUser, loginUser, updateUsername, updateEmail, updatePassword, deleteUser };