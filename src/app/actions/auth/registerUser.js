"use server";

import dbConect from "@/lib/dbConect";
import bcrypt from "bcryptjs";

export const registerUser = async (payload) => {
  const userCollection = await dbConect("users");
  const existingUser = await userCollection.findOne({ email: payload.email });

  if (existingUser) {
    return { success: false, message: "Email already registered" };
  }

  const hashedPassword = await bcrypt.hash(payload.password, 10);
  const result = await userCollection.insertOne({
    ...payload,
    password: hashedPassword,
  });

  return {
    success: true,
    message: "User registered successfully",
    insertedId: result.insertedId.toString(), 
  };
};
