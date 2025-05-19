"use client";
import React from "react";

export default function ProductsDelete({ id }) {
  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className=" bg-red-600">
      <button
        className=' className="bg-red-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm '
        onClick={() => handleDelete(id)}
      >
        delete
      </button>
    </div>
  );
}
