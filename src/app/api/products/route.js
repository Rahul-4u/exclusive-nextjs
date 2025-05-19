// app/api/products/route.js
import dbConect from "@/lib/dbConect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const body = await req.json();

    const productsCollection = await dbConect("products");

    const result = await productsCollection.insertOne({
      ...body,
      createdAt: new Date(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Product created successfully",
        insertedId: result.insertedId.toString(),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create product" },
      { status: 500 }
    );
  }
};
