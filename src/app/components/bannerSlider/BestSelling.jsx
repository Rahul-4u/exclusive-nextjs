




import dbConect from "@/lib/dbConect";
import Link from "next/link";



const BestSelling = async () => {
  const dbServer = await dbConect("products");
  const bestSellingProducts = await dbServer.find({}).toArray();
  return (
    <div className="my-12 px-4 md:px-16">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-red-500 font-semibold">This Month</p>
          <h2 className="text-2xl md:text-3xl  text-black font-bold">
            Best Selling Products
          </h2>
        </div>
        <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
          View All {bestSellingProducts.length}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bestSellingProducts.map((product, index) => (
          <div
            key={index }
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition relative group"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain mb-4"
              />
              <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                <button className="bg-white p-2 rounded-full shadow hover:shadow-md">
                  ❤️
                </button>
                <Link
                  href={`products/${product?._id}`}
                  className="bg-white p-2 rounded-full shadow hover:shadow-md"
                >
                  👁️
                </Link>
              </div>
            </div>
            <h4 className="font-semibold text-md">{product.name}</h4>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-red-500 font-bold">${product.price}</span>
              {product.originalPrice && (
                <span className="line-through text-gray-400 text-sm">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <div className="flex items-center text-yellow-500 mt-1 text-sm">
              {"★".repeat(Math.floor(product.rating))}
              {"☆".repeat(5 - Math.floor(product.rating))}
              <span className="text-gray-600 ml-2">
                ({product.totalReviews})
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
