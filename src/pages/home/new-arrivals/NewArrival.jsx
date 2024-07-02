import { Link } from "react-router-dom";

export default function NewArrival() {
  return (
    <div className="py-6 sm:py-8 lg:py-16 px-4 md:px-8">
      <div className="m-auto max-w-6xl px-4 md:px-8">
        <div className="mb-4 sm:mb-6 md:mb-10">
          <div className="flex items-center justify-start gap-4">
            <div className="w-4 h-6 bg-blue-500 rounded-sm"></div>
            <h2 className="text-blue-500 font-semibold text-lg">Tody's</h2>
          </div>
          <div className="pt-2 flex items-center justify-start gap-6">
            <h1 className="text-3xl font-semibold">New Arrival</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 xl:gap-8">
          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
            <img 
              src="https://i.ibb.co/Pj36N6V/dffdf.jpg" 
              loading="lazy" 
              alt="Photo by Minh Pham" 
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <div className="bottom-0 p-6 flex flex-col gap-2 items-start relative">
              <p className="text-[20px] font-medium text-white">Speakers</p>
              <span className="text-gray-300 text-base text-wrap">Amazon wireless speakers</span>
              <Link className="text-white text-[14px] font-medium border-b-2 border-white">Shop Now</Link>
            </div>
          </div>
          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
            <img 
              src="https://i.ibb.co/8BRNxk9/laptop.jpg" 
              loading="lazy" 
              alt="Photo by Magicle" 
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <div className="bottom-0 p-6 flex flex-col gap-2 items-start relative">
              <p className="text-[20px] font-medium text-white">Macbook M3</p>
              <span className="text-gray-300 text-base text-wrap lg:w-72">Elevate Your Productivity With Cutting-Edge Laptop Technology.</span>
              <Link className="text-white text-[14px] font-medium border-b-2 border-white">Shop Now</Link>
            </div>
          </div>
          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
            <img 
              src="https://i.ibb.co/zGk6cZS/play5.jpg" 
              loading="lazy" 
              alt="Photo by Martin Sanchez" 
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <div className="bottom-0 p-6 flex flex-col gap-2 items-start relative">
              <p className="text-[20px] font-medium text-white">Playstation 5</p>
              <span className="text-gray-300 text-base text-wrap lg:w-72">Black and White version of the PS5 coming out on sale.</span>
              <Link className="text-white text-[14px] font-medium border-b-2 border-white">Shop Now</Link>
            </div>
          </div>
          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
            <img 
              src="https://i.ibb.co/92nThYH/dfdf.jpg" 
              loading="lazy" 
              alt="Photo by Lorenzo Herrera" 
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <div className="bottom-0 p-6 flex flex-col gap-2 items-start relative">
              <p className="text-[20px] font-medium text-white">COCO Channel</p>
              <span className="text-gray-300 text-base text-wrap">The scent of individuality</span>
              <Link className="text-white text-[14px] font-medium border-b-2 border-white">Shop Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
