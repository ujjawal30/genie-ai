"use server";

import { auth } from "@clerk/nextjs";

import connectToDB from "@/lib/mongoose";
import User, { IUser } from "@/lib/models/user.model";
import { MAX_FREE_COUNTS } from "@/constants";

export const fetchUser = async (): Promise<IUser> => {
  try {
    await connectToDB();
    const { sessionClaims } = auth();

    let userDetails = await User.findOne({ clerkId: sessionClaims?.id });

    if (!userDetails) {
      userDetails = await User.create({
        clerkId: sessionClaims?.id,
        email: sessionClaims?.email,
        name: sessionClaims?.name || sessionClaims?.email,
      });
    }

    return userDetails;
  } catch (error: any) {
    console.log("[USER_ERROR] :>>", error);
    throw error;
  }
};

export const incrementAPIHit = async (): Promise<void> => {
  const { userId } = auth();
  try {
    await connectToDB();

    await User.findOneAndUpdate({ clerkId: userId }, { $inc: { limit: 1 } });
  } catch (error: any) {
    console.log("[API_INCREMENT_ERROR] :>>", error);
    throw error;
  }
};

export const checkFreeHitsAvailability = async (): Promise<boolean> => {
  try {
    await connectToDB();

    const userDetails = await fetchUser();

    if (userDetails && userDetails.limit <= MAX_FREE_COUNTS) return true;

    return false;
  } catch (error: any) {
    console.log("[API_INCREMENT_ERROR] :>>", error);
    throw error;
  }
};
