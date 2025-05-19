"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { useState } from "react";

const banners = [
  {
    id: 1,
    title: "Trendy Fashion Wear",
    subtitle: "Stay stylish with our latest collection",
    image: "https://i.ibb.co.com/Z1SxZBjx/images-4-removebg-preview.png",
  },
  {
    id: 2,
    title: "Elegant Accessories",
    subtitle: "Perfect add-ons for your look",
    image: "https://i.ibb.co.com/GfPWGV5j/images-2-removebg-preview.png",
  },
  {
    id: 3,
    title: "Seasonal Specials",
    subtitle: "Grab your winter essentials now",
    image: "https://i.ibb.co.com/dJkN0KZY/download-1-removebg-preview.png",
  },
  {
    id: 4,
    title: "Modern Outfit Ideas",
    subtitle: "Upgrade your wardrobe with fresh styles",
    image: "https://i.ibb.co.com/Q3MzMXK8/download-removebg-preview.png",
  },
  {
    id: 5,
    title: "Exclusive Offers",
    subtitle: "Don't miss out on limited-time deals",
    image: "https://i.ibb.co.com/8D9gpdK3/images-3-removebg-preview.png",
  },
];


const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white hover:bg-blue-600 hover:text-white p-2 rounded-full shadow"
  >
    &larr;
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white hover:bg-blue-600 hover:text-white p-2 rounded-full shadow"
  >
    &rarr;
  </button>
);

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (_, next) => setCurrentSlide(next), // Track current slide
  };

  return (
    <div className="relative overflow-hidden">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={banner.id}>
            <div className="h-[85vh] flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 px-6 md:px-20">
              <motion.div
                key={
                  currentSlide === index
                    ? `${banner.id}-active`
                    : `${banner.id}-inactive`
                }
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-6xl mx-auto"
              >
                {/* Text */}
                <div className="text-left space-y-4">
                  <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800">
                    {banner.title}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-600">
                    {banner.subtitle}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
                  >
                    Shop Now
                  </motion.button>
                </div>

                {/* Image */}
                <div className="flex justify-center">
                  <img
                    src={banner.image}
                    alt={banner.title}
                    className="w-full max-w-md md:max-w-xl rounded-lg shadow-lg"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
