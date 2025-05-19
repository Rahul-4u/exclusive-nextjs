import React from "react";
import AboutClient from "./AboutClient";
import dbConect from "@/lib/dbConect";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
// import { authOptions } from "@/lib/authOptions"; // ঠিক path use করো

export default async function About() {
  // ✅ Server-side session access
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return <div>Please log in to view this page.</div>;
  }

  const dbServer = await dbConect("users");
  const userData = await dbServer.findOne({ email: session.user.email });

  if (!userData) {
    return <div>No user data found.</div>;
  }

  return <AboutClient bestSellingCount={userData.role} />;
}
