import { CreateUserParams } from "@/types";
import { db } from ".";
import { handleError } from "../utils";

export const createUser = async (user: CreateUserParams) => {
  try {
    const newUser = await db.user.create({
      data: user,
    });
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
};

export const deleteUser = async (id: string) => {
  try {
    const deletedUser = await db.user.delete({
      where: {
        clerkId: id,
      },
    });
    if (!deletedUser) {
      throw new Error("User not found");
    }
    return JSON.parse(JSON.stringify(deleteUser));
  } catch (error) {
    handleError(error);
  }
};

export const updateUser = async (id: string, user: CreateUserParams) => {
  try {
    const updatedUser = await db.user.update({
      where: { clerkId: id },
      data: {
        ...user,
      },
    });
    if (!updatedUser) throw new Error("User update failed");
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        clerkId: id,
      },
    });
    if (!user) throw new Error("User not found");
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
};
