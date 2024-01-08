"use server";

import { signIn, signOut } from "../auth";
import { User } from "../models/user";
import { connectToDb } from "../utils/database";
import bcrypt from "bcrypt";

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async (previousState, formData) => {
  const { username, email, password, image, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return "Passwords do not match";
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    await connectToDb();
    const user = await User.findOne({ email });

    if (user) {
      return "Username already exists";
    }

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      image,
    });

    await newUser.save();
    console.log("Saved to db");
  } catch (error) {
    console.log("saved to db");
    return { error: "Something went wrong!" };
  }
};

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
