// app/dashboard/layout.jsx or .tsx
import { getServerSession } from "next-auth"; // Server-side session
import { authOptions } from "../api/auth/[...nextauth]/route";
import Sidebar from "../shared/Sidebar";
import NextAuthProvider from "@/provider/NextAuthProvider";

export default async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions);
  const user = session?.user; // this should include `role`

  return (
    <div className="flex min-h-screen">
      <NextAuthProvider>
        <Sidebar userData={user} /> {/* ✅ Pass userData explicitly */}
        <main className="flex-1 p-6">{children}</main>
      </NextAuthProvider>
    </div>
  );
}
