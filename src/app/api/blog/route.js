import { Post } from "@/lib/models/post";
import { connectToDb } from "@/lib/utils/database";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    connectToDb();

    const posts = await Post.find();
    console.log(posts);
    return NextResponse.json(posts);
  } catch (err) {
    throw new Error("Failed to fetch posts!");
  }
};
