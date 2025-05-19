import Link from "next/link";
import {
  FaDesktop,
  FaLaptop,
  FaMobileAlt,
  FaHeadphonesAlt,
  FaApple,
} from "react-icons/fa";

const categories = [
  {
    name: "PC",
    path: "/",
    icon: <FaDesktop className="text-xl text-blue-500" />,
  },
  {
    name: "Laptop",
    path: "/about",
    icon: <FaLaptop className="text-xl text-green-500" />,
  },
  {
    name: "Phone",
    path: "/projects",
    icon: <FaMobileAlt className="text-xl text-purple-500" />,
  },
  {
    name: "HeadPhone",
    path: "/contact",
    icon: <FaHeadphonesAlt className="text-xl text-pink-500" />,
  },
  {
    name: "EiFo",
    path: "/contact",
    icon: <FaApple className="text-xl text-gray-800" />,
  },
];

const CategoryNav = () => {
  return (
    <section className="py-2 h-auto px-2  bg-gray-50">
      <div className=" mx-auto">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1   gap-2">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.path}
              className="flex   gap-2 items-center  bg-white shadow hover:shadow-lg p-4 rounded-lg transition-transform transform hover:scale-105 cursor-pointer"
            >
              {category.icon}
              <span className="text-sm sm:text-base font-medium text-gray-700 mt-2">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryNav;
