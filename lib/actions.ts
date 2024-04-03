"use server";

import connectToDB from "@/lib/mongoose";
import User from "@/lib/models/user.model";

export const registerUser = async (userId: string, name: string) => {
  try {
    await connectToDB();

    let userDetails = await User.findOne({ clerkId: userId });

    if (!userDetails) {
      userDetails = await User.create({
        clerkId: userId,
        name: name,
      });
    }

    return JSON.parse(JSON.stringify(userDetails));
  } catch (error: any) {
    console.log("[USER_ERROR] :>>", error);
    throw error;
  }
};

export const incrementAPIHit = async (userId: string) => {
  try {
    await connectToDB();

    await User.findOneAndUpdate({ clerkId: userId }, { $inc: { limit: 1 } });
  } catch (error: any) {
    console.log("[API_INCREMENT_ERROR] :>>", error);
    throw error;
  }
};
