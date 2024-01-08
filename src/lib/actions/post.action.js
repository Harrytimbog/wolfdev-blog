"use server";

import { Post } from "../models/post";
import { connectToDb } from "../utils/database";

export const getPosts = async () => {
  try {
    await connectToDb();
    const posts = await Post.find();

    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    await connectToDb();
    const post = await Post.findById({ slug });

    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post!");
  }
};
