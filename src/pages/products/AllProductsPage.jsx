import ProductCard from "../../components/products/ProductCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { IoFilter, IoClose } from "react-icons/io5";
import { Button, Divider, Slider } from "@nextui-org/react";
import { useState } from "react";
import FiltarAccording from "../../components/filters/FiltarAccording";
import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumbs/BreadCrumbs";

function AllProductsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([100, 300]);
  const axiosPublic = useAxiosPublic();
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosPublic.get("/products/0");
      return res.data;
    },
  });

  const cardShows = [
    { key: "20", label: "20" },
    { key: "60", label: "60" },
    { key: "80", label: "80" },
    { key: "100", label: "100" },
  ];

  const filterSelect = [
    { key: "default", label: "Default" },
    { key: "low", label: "Price (Low > High)" },
    { key: "high", label: "Price (High > Low)" },
  ];

  const availabilityItems = [
    { label: "In Stock", value: "instock" },
    { label: "Pre Order", value: "preorder" },
    { label: "Up Coming", value: "upcoming" },
  ];

  const filterSize = [
    { label: "XL", value: "xl" },
    { label: "L", value: "l" },
    { label: "M", value: "m" },
    { label: "S", value: "s" },
    { label: "XS", value: "xs" },
  ];

  const filterColors = [
    { label: "Black", value: "black" },
    { label: "White", value: "white" },
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Gray", value: "gray" },
  ];



  return (
    <section className="max-w-6xl p-4 m-auto">
      <Helmet title="Search Product | Zephyra Online Shop"/>
      <div className="lg:pb-8 md:pb-6 pb-4">
        <Breadcrumb />
      </div>
      <div className="flex items-start gap-4 w-full">
        <aside
          id="logo-sidebar"
          className={`lg:bg-transparent z-40 lg:z-30 lg:min-h-screen h-full no-scrollbar overflow-y-scroll ${isMenuOpen && "bg-gray-900/50 lg:w-72 w-full"} rounded-md lg:static fixed top-0 left-0 ${!isMenuOpen && "-translate-x-[0px] hidden lg:inline-flex lg:translate-x-0"} transition-transform`}
          aria-label="Sidebar"
        >
          <div className={`flex flex-col min-h-screen w-64 gap-2 ${isMenuOpen ? "bg-white" : "bg-transparent"}`}>
            <div className="fixed left-[210px] top-1.5 lg:hidden">
              <Button size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} isIconOnly color="primary" variant="shadow" aria-label="Close Filter Button">
                <IoClose />
              </Button>
            </div>
            <div className="bg-white shadow-sm w-64 rounded-md">
              <p className="px-4 py-3 text-gray-700 text-[14px] font-normal">Price Range</p>
              <Divider className="bg-gray-200"/>
              <div className="flex flex-col gap-4 w-full p-4 h-auto">
                <Slider
                    formatOptions={{ style: "currency", currency: "USD" }}
                    step={10}
                    maxValue={1000}
                    minValue={0}
                    value={priceRange}
                    onChange={setPriceRange}
                    className="max-w-md"
                    aria-label="Price Range Selector"
                  />
                  <div className="flex w-full items-center justify-between">
                    <div className="w-16 p-1 rounded-md border-1 border-gray-300 text-center text-[14px]">
                      ${priceRange[0]}
                    </div>
                    <div className="w-16 p-1 rounded-md border-1 border-gray-300 text-center text-[14px]">
                      ${priceRange[1]}
                    </div>
                  </div>
              </div>
            </div>
            <div className="bg-white shadow-sm w-64 rounded-md">
              <FiltarAccording keys={"1"} title="Availability" items={availabilityItems} />
            </div>
            <div className="bg-white shadow-sm w-64 rounded-md">
              <FiltarAccording keys={"2"} title="Size" items={filterSize} />
            </div>
            <div className="bg-white shadow-sm w-64 rounded-md">
              <FiltarAccording keys={"3"} title="Colors" items={filterColors} />
            </div>
          </div>
        </aside>
        <div className="flex flex-col flex-1 gap-4">
          <div className="flex rounded-md shadow-sm items-center bg-white justify-between p-3">
            <div>
              <Button
                size="sm"
                variant="flat"
                color="default"
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                className="inline-flex text-gray-700 lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <IoFilter size={16} />
                <span className="text-tiny">Filter</span>
              </Button>
              <span className="text-gray-700 hidden lg:inline-flex text-base font-medium">
                All Device
              </span>
            </div>
            <div className="flex items-center justify-end flex-1 gap-4">
              <div className="hidden lg:block">
                <FilterSelect label="Show" options={cardShows} defaultKey="20" width="120px" />
              </div>
              <FilterSelect label="Short By" options={filterSelect} defaultKey="default" width="220px" />
            </div>
          </div>
          <div className="w-full">
            <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 pb-6">
              {products.map((item) => (
                <ProductCard key={item?._id} product={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function FilterSelect({ label, options }) {
  return (
      <div className="flex items-center gap-1 justify-center">
      <label htmlFor="small" className="block w-[80px] text-end text-tiny font-medium text-gray-600">{label}</label>
      <select id="small" className="block p-[3px] w-28 md:w-full text-sm text-gray-600 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:text-white">
        {
          options.map(item => <option key={item.key} >{item.label}</option>)
        }
      </select>
      </div>
  );
}

export default AllProductsPage;
