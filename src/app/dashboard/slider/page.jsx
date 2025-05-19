import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import dbConect from "@/lib/dbConect";
import { getServerSession } from "next-auth";
import React from "react";
import Sidebar from "@/app/shared/Sidebar";


export default async function Slider() {
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

  return <Sidebar userData={userData}/>
}
