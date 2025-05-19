import Image from "next/image";
import BannerSlider from "./components/bannerSlider/BannerSlider";
import CategoryNav from "./components/bannerSlider/CategoryNav";
import BestSelling from "./components/bannerSlider/BestSelling";

export default function Home() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <din className="grid md:grid-cols-12 ">
          <div className=" grid category  md:col-span-3 md:block  hidden">
            {" "}
            <CategoryNav />
          </div>
          <div className="grid slider  md:col-span-9 col-span-12">
            {" "}
            <BannerSlider />
          </div>
        </din>
        <BestSelling />
      </div>
    </>
  );
}
