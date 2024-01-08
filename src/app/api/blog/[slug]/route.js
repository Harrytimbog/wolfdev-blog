import { Post } from "@/lib/models/post";
import { connectToDb } from "@/lib/utils/database";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const slug = params;

  try {
    await connectToDb();

    const post = await Post.findById({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post!");
  }
};

export const DELETE = async (request, { params }) => {
  const slug = params;

  try {
    await connectToDb();

    await Post.deleteOne({ slug });
    return NextResponse.json("Post deleted");
  } catch (error) {
    console.log(error);
    throw new Error("Failed delete post!");
  }
};
