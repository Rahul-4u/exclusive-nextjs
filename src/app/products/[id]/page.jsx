import React from "react";
import Image from "next/image";
import { FaMinus, FaPlus, FaHeart } from "react-icons/fa";
import dbConect from "@/lib/dbConect";
import { ObjectId } from "mongodb";

export default async function ProductDetails({ params }) {
    const p = params; 
    const dbServer = await dbConect("products");
      const data = await dbServer.findOne({_id: new ObjectId(p.id)})
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-black p-8 mt-20 max-w-6xl mx-auto">
      {/* Left side images */}
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden"
            >
              <Image
                src={data?.image}
                alt="thumb"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex-1 bg-gray-100 rounded-xl overflow-hidden">
          <Image
            src={data?.image}
            alt="main image"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Right side product info */}
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-black">{data?.name}</h1>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="text-yellow-500">★★★★☆</span>
          <span>(150 Reviews)</span>
          <span className="text-green-500">| In Stock</span>
        </div>
        <p className="text-2xl text-black font-bold">${data?.price}</p>
        <p className="text-gray-600 text-sm">
          PlayStation 5 Controller Skin High quality vinyl with air channel
          adhesive for easy bubble free install & mess free removal. Pressure
          sensitive.
        </p>

        <div>
          <p className="font-semibold text-black mb-2">Colours:</p>
          <div className="flex gap-2">
            <button className="w-5 h-5 rounded-full bg-black border-2 border-gray-300"></button>
            <button className="w-5 h-5 rounded-full bg-red-400 border-2 border-gray-300"></button>
          </div>
        </div>

        <div>
          <p className="font-semibold mb-2 text-black">Size:</p>
          <div className="flex gap-2">
            {["XS", "S", "M", "L", "XL"].map((size, i) => (
              <button
                key={i}
                className={`px-3 py-1 rounded border ${
                  size === "M" ? "bg-red-500 text-white" : "bg-white text-black"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center border px-2 py-1 rounded">
            <button>
              <FaMinus />
            </button>
            <span className="px-4">2</span>
            <button>
              <FaPlus />
            </button>
          </div>
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded">
            Buy Now
          </button>
          <button className="text-gray-500">
            <FaHeart />
          </button>
        </div>

        <div className="border-t pt-4 space-y-2 text-sm">
          <div>
            <p className="font-semibold">Free Delivery</p>
            <p className="text-gray-600">
              Enter your postal code for Delivery Availability
            </p>
          </div>
          <div>
            <p className="font-semibold">Return Delivery</p>
            <p className="text-gray-600">
              Free 30 Days Delivery Returns.{" "}
              <span className="underline cursor-pointer">Details</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
