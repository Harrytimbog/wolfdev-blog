"use server";

import { User } from "../models/user";
import { connectToDb } from "../utils/database";

export const getUser = async (id) => {
  try {
    await connectToDb();
    const user = await User.findById({ id });

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user!");
  }
};

export const getAllUsers = async () => {
  try {
    await connectToDb();
    const users = await User.find();

    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users!");
  }
};
