// Middleware to check the user that have the premium or the free plan

import { clerkClient } from "@clerk/express";

export const auth = async (req, res, next) => {
  try {
    console.log("Req.auth", req.auth());
    const { userId, has } = await req.auth();
    console.log(userId);

    const hasPremiumPlan = await has({ plan: "premium" });

    const user = await clerkClient.users.getUser(userId);

    if (!hasPremiumPlan && user.privateMetadata.free_usage) {
      // here i can error came
      req.free_usage = user.privateMetadata.free_usage;
    } else {
      await clerkClient.users.updateUserMetadata(userId, {
        privateMetadata: {
          free_usage: 0,
        },
      });
      req.free_usage = 0;
    }

    req.plan = hasPremiumPlan ? "premium" : "free";
    next();
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};
