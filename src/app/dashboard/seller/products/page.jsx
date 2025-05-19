import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import dbConect from "@/lib/dbConect";
import { getServerSession } from "next-auth";
import ProductList from "./produtcsList/ProductList";

export default async function Products() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return <div>Unauthorized</div>;
  }

  const email = session.user.email;

  const dbserver = await dbConect("products");
    const productData = await dbserver.find({ email }).toArray();
    

    return <ProductList productData = {productData} />;
}
