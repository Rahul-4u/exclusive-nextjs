"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function UpdateProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch the product details by ID
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedProduct = {
      name: e.target.name.value,
      description: e.target.description.value,
      price: e.target.price.value,
    };

    fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Product updated successfully!");
        // Optional: Redirect back to product list
      });
  };

  if (!product) return <p>Loading...</p>;

  return (
    <form
      onSubmit={handleUpdate}
      className="max-w-xl mx-auto bg-white p-6 rounded shadow"
    >
      <h2 className="text-2xl font-bold mb-4">🛠️ Update Product</h2>

      <input
        name="name"
        defaultValue={product.name}
        className="w-full p-2 border mb-4"
        required
      />

      <textarea
        name="description"
        defaultValue={product.description}
        className="w-full p-2 border mb-4"
        required
      />

      <input
        name="price"
        type="number"
        step="0.01"
        defaultValue={product.price}
        className="w-full p-2 border mb-4"
        required
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Update
      </button>
    </form>
  );
}
