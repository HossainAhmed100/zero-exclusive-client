import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import ProductCard from "../../../components/products/ProductCard";
import { Button, Link } from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa6";

function BestSallingItems() {
    const axiosPublic = useAxiosPublic();
    const {data: bestItems = []} = useQuery({
        queryKey: ["bestItems"],
        queryFn: async () => {
            const res = await axiosPublic.get("/products/4");
            return res.data
        }
    })
  return (
    <div className="py-6 border-y-1 sm:py-8 lg:py-16 px-4 md:px-8">
      {/* Section header */}
      <div className="flex items-center flex-row md:justify-between gap-6">
      <div className="pt-2 w-full flex flex-col items-start justify-start gap-6">
      <div className="flex items-center justify-start gap-4">
        <div className="w-4 h-6 bg-blue-500 rounded-sm"></div>
        <h2 className="text-blue-500 font-semibold text-lg">Tody's</h2>
      </div>
      <h1 className="text-3xl font-semibold">Beast Sales</h1>
      </div>
      <div className="">
        <Button radius="sm" size="sm" as={Link} href="/all-products" className="bg-blue-500 text-white font-medium" endContent={<FaArrowRight size={16}/>}>
          View All
        </Button> 
      </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 py-6">
        {bestItems.map((item) => <ProductCard key={item?._id} product={item}/>)}
      </div>
    </div>
  )
}

export default BestSallingItems
