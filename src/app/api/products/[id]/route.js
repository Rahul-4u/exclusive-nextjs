import dbConect from "@/lib/dbConect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

export const DELETE = async (req, { params }) => {


    const p = await params;
    const query = { _id: new ObjectId(p.id) };
    const productsCollection = await dbConect('products');
    // vallid
    const session = await getServerSession(authOptions);
    const currentProducts = await productsCollection.findOne(query);
    const isOwner = session?.user?.email == currentProducts?.email;

   if (isOwner) {
     // delete option
     const deleteresponse = await productsCollection.deleteOne(query);
     return NextResponse.json(deleteresponse);
   } else {
    return NextResponse.json({success: false})
   }





    
};
//  GET - fetch product data for edit form
export const GET = async (req, { params }) => {
  const { id } = params;
  const productsCollection = await dbConect("products");
  const product = await productsCollection.findOne({ _id: new ObjectId(id) });

  if (product) {
    return NextResponse.json(product);
  } else {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }
};

//  PUT - update product
export const PUT = async (req, { params }) => {
  const { id } = params;
  const body = await req.json();
  const session = await getServerSession(authOptions);
  const productsCollection = await dbConect("products");

  const existing = await productsCollection.findOne({ _id: new ObjectId(id) });

  if (!existing) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  const isOwner = session?.user?.email === existing?.email;
  if (!isOwner) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const updatedDoc = {
    $set: {
      name: body.name,
      description: body.description,
      price: body.price,
      image: body.image,
    },
  };

  const result = await productsCollection.updateOne(
    { _id: new ObjectId(id) },
    updatedDoc
  );

  return NextResponse.json(result);
};
