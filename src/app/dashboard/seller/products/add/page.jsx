"use client";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

export default function AddProducts() {
  const { data: session } = useSession();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    discountPrice: "",
    stock: "",
    brand: "",
    email: session?.user?.email,
    tags: "",
    shipping: "",
    sku: "",
    returnPolicy: "",
    warranty: "",
    status: "draft",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const productData = {
        ...product,
        tags: product.tags.split(",").map((tag) => tag.trim()),
        // images: product.images
        //   .split(",")
        //   .map((url) => url.trim())
        //   .filter((url) => url),
      };

      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      const result = await res.json();

      if (result.success) {
        alert("✅ Product added successfully!");
        setProduct({
          name: "",
          description: "",
          category: "",
          price: "",
          discountPrice: "",
          stock: "",
          brand: "",
          email: session?.user?.email,
          tags: "",
          shipping: "",
          sku: "",
          returnPolicy: "",
          warranty: "",
          status: "draft",
          image: "",
        });
      } else {
        alert(" Failed to add product");
      }
    } catch (err) {
      console.error(err);
      alert(" Something went wrong");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-slate-400 text-black shadow-md rounded-lg mt-6">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">
        🛒 Add New Product
      </h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Product Name */}
        <div>
          <label className="block font-medium">Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
            className="input"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            rows={4}
            className="input"
          />
        </div>

        {/* Category & Brand */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Category</label>
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleChange}
              required
              className="input"
            />
          </div>
          <div>
            <label className="block font-medium">Brand</label>
            <input
              type="text"
              name="brand"
              value={product.brand}
              onChange={handleChange}
              className="input"
            />
          </div>
        </div>

        {/* Price & Discount Price */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Price ($)</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
              className="input"
            />
          </div>
          <div>
            <label className="block font-medium">Discount Price ($)</label>
            <input
              type="number"
              name="discountPrice"
              value={product.discountPrice}
              onChange={handleChange}
              className="input"
            />
          </div>
        </div>

        {/* Stock */}
        <div>
          <label className="block font-medium">Stock Quantity</label>
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            required
            className="input"
          />
        </div>

        {/* SKU */}
        <div>
          <label className="block font-medium">SKU</label>
          <input
            type="text"
            name="sku"
            value={product.sku}
            onChange={handleChange}
            className="input"
          />
        </div>

        {/* Tags */}
        <div>
          <label className="block font-medium">Tags (comma separated)</label>
          <input
            type="text"
            name="tags"
            value={product.tags}
            onChange={handleChange}
            className="input"
          />
        </div>

        {/* Shipping */}
        <div>
          <label className="block font-medium">Shipping Information</label>
          <textarea
            name="shipping"
            value={product.shipping}
            onChange={handleChange}
            rows={2}
            className="input"
          />
        </div>

        {/* Return Policy */}
        <div>
          <label className="block font-medium">Return Policy</label>
          <textarea
            name="returnPolicy"
            value={product.returnPolicy}
            onChange={handleChange}
            rows={2}
            className="input"
          />
        </div>

        {/* Warranty */}
        <div>
          <label className="block font-medium">Warranty Information</label>
          <textarea
            name="warranty"
            value={product.warranty}
            onChange={handleChange}
            rows={2}
            className="input"
          />
        </div>

        {/* Images as URL input */}
        <div>
          <label className="block font-medium">
            Image URLs (comma separated)
          </label>
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            className="input"
          />
          {/* {product.images && (
            <ul className="mt-2 list-disc list-inside text-sm text-gray-700">
              {product.images
                .split(",")
                .map((url, i) => url.trim())
                .filter((url) => url)
                .map((url, i) => (
                  <li key={i}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      {url}
                    </a>
                  </li>
                ))}
            </ul>
          )} */}
        </div>

        {/* Status */}
        <div>
          <label className="block font-medium">Status</label>
          <select
            name="status"
            value={product.status}
            onChange={handleChange}
            className="input"
          >
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
