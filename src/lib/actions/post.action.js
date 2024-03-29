"use server";

import { revalidatePath } from "next/cache";
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

export const addPost = async (prevState, formData) => {
  // const title = formData.get("title");
  // const description = formData.get("description");
  // const slug = formData.get("slug");

  const { title, description, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      description,
      slug,
      userId,
    });

    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

// export const getPost = async (slug) => {
//   try {
//     await connectToDb();
//     const post = await Post.findById({ slug });
//     console.log(post);
//     return post;
//   } catch (error) {
//     console.log(error);
//     throw new Error("Failed to fetch post!");
//   }
// };

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
