import { Link } from "react-router-dom";

export default function NewArrival() {
  return (
    <div className="py-6 sm:py-8 lg:py-16 px-4 md:px-8">
      <div className="m-auto max-w-6xl px-4 md:px-8">
        <div className="mb-4 sm:mb-6 md:mb-10">
          <div className="flex items-center justify-start gap-4">
            <div className="w-4 h-6 bg-gray-500 rounded-sm"></div>
            <h2 className="text-gray-500 font-medium text-lg">Tody's</h2>
          </div>
          <div className="pt-2 flex items-center justify-start gap-6">
            <h1 className="text-3xl font-semibold">New Arrival</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 xl:gap-8">
          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
            <img 
              src="https://images.unsplash.com/photo-1642561265602-f4511a809d51?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              loading="lazy" 
              alt="Photo by Minh Pham" 
              className="absolute inset-0 h-full w-full object-cover  transition duration-200 group-hover:scale-110" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <div className="bottom-0 p-6 flex flex-col gap-2 items-start relative">
              <p className="text-[20px] font-medium text-white">Tasbih Colections</p>
              {/* <span className="text-gray-200 text-base text-wrap">New Tasbih Collection</span> */}
              <Link className="text-white text-[14px] font-medium border-b-2 border-white">Shop Now</Link>
            </div>
          </div>
          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
            <img 
              src="https://images.unsplash.com/photo-1458538977777-0549b2370168?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              loading="lazy" 
              alt="Photo by Magicle" 
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <div className="bottom-0 p-6 flex flex-col gap-2 items-start relative">
              <p className="text-[20px] font-medium text-white">New Kashmiri Attar</p>
              {/* <span className="text-gray-200 text-base text-wrap lg:w-72">Timeless Elegance: Embrace the Essence of Pure Attar.</span> */}
              <Link className="text-white text-[14px] font-medium border-b-2 border-white">Shop Now</Link>
            </div>
          </div>
          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
            <img 
              src="https://images.unsplash.com/photo-1666162174640-60b5685ba645?q=80&w=1640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              loading="lazy" 
              alt="Photo by Martin Sanchez" 
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <div className="bottom-0 p-6 flex flex-col gap-2 items-start relative">
              <p className="text-[20px] font-medium text-white">New Janamaz Collections</p>
              {/* <span className="text-gray-200 text-base text-wrap lg:w-72">Ultimate Guide to Janamaz Price in Bangladesh</span> */}
              <Link className="text-white text-[14px] font-medium border-b-2 border-white">Shop Now</Link>
            </div>
          </div>
          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
            <img 
              src="https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              loading="lazy" 
              alt="Photo by Lorenzo Herrera" 
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <div className="bottom-0 p-6 flex flex-col gap-2 items-start relative">
              <p className="text-[20px] font-medium text-white">Winter T-Shirt</p>
              {/* <span className="text-gray-300 text-base text-wrap">The scent of individuality</span> */}
              <Link className="text-white text-[14px] font-medium border-b-2 border-white">Shop Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
