"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ProductsDelete from "../components/ProductsDelete";

export default function ProductList({ productData }) {
  const router = useRouter();

  const handleEdit = (id) => {
    router.push(`/seller/update-product/${id}`);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
        📋 Product List
      </h2>z

      {productData?.length === 0 ? (
        <p className="text-center text-gray-500">No products found.</p>
      ) : (
        <ul className="space-y-4">
          {productData.map((product) => (
            <li
              key={product._id}
              className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <img
                src={product.image || "/placeholder.png"}
                alt={product.name}
                className="w-24 h-24 object-cover rounded-md border"
              />

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-1">
                  {product.description}
                </p>
                <p className="text-blue-600 font-medium mt-1">
                  Price: ${product.price}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleEdit(product._id)}
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
                >
                  Edit
                </button>
                <ProductsDelete id={product?._id} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
