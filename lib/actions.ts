"use server";

import { auth } from "@clerk/nextjs";

import connectToDB from "@/lib/mongoose";
import User, { IUser } from "@/lib/models/user.model";
import { MAX_FREE_TRAILS } from "@/constants";
import Subscription from "./models/subscription.model";

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

export const incrementFreeTrailCount = async (): Promise<void> => {
  const { userId } = auth();
  try {
    await connectToDB();

    await User.findOneAndUpdate({ clerkId: userId }, { $inc: { limit: 1 } });
  } catch (error: any) {
    console.log("[API_INCREMENT_ERROR] :>>", error);
    throw error;
  }
};

export const checkFreeTrailAvailability = async (): Promise<boolean> => {
  try {
    await connectToDB();

    const userDetails = await fetchUser();

    if (!userDetails || userDetails.limit < MAX_FREE_TRAILS) return true;

    return false;
  } catch (error: any) {
    console.log("[CHECK_FREE_TRAIL_ERROR] :>>", error);
    throw error;
  }
};

export const checkSubscription = async (): Promise<boolean> => {
  const { userId } = auth();
  if (!userId) return false;

  try {
    await connectToDB();

    const userSubscription = await Subscription.findOne({ userId });
    if (!userSubscription) return false;

    const isPro =
      userSubscription.priceId &&
      userSubscription.currentPeriodEnd.getTime() > Date.now();

    return !!isPro;
  } catch (error: any) {
    console.log("[CHECK_SUBSCRIPTION_ERROR] :>>", error);
    throw error;
  }
};
