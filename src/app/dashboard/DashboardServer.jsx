
import dbConect from "@/lib/dbConect";
import AdminDashboardPage from "./admin/page";
import SellerDashboard from "./seller/page";
import CustomerDashboard from "./customer/page";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import DashboardHome from "./page";


export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  const db = await dbConect("users");
  const user = await db.findOne({ email: session?.user?.email });

  let content = null;

  if (user?.role === "admin") {
    content = <AdminDashboardPage />;
  } else if (user?.role === "seller") {
    content = <SellerDashboard/>;
  } else if (user?.role === "customer") {
    content = <CustomerDashboard />;
  } else {
    content = <div>You are not authorized.</div>;
  }

  return <DashboardHome>{content}</DashboardHome>;
}
