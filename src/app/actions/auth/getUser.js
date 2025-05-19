"use server";

import dbConect from "@/lib/dbConect";
import bcrypt from "bcryptjs";

export const getUserByEmailAndPassword = async (email, password) => {
  const userCollection = await dbConect("users");
  const user = await userCollection.findOne({ email });

  if (!user) return null;

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return null;

  return {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    image: user.image,
    role: user.role,
  };
};
