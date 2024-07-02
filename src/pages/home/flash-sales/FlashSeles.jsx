import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic"
import { Button, Link } from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";
import ProductCard from "../../../components/products/ProductCard";
import OfferTimer from "../../../components/timer/OfferTimer";

function FlashSeles() {
  const axiosPublic = useAxiosPublic();
  const {data: products = []} = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
        const res = await axiosPublic.get("/products/4");
        return res.data
    }
  })
  return (
    <div className="py-6 sm:py-8 lg:py-16 px-4 md:px-8">
      <div className="flex md:items-center items-start md:flex-row flex-col md:justify-between gap-6">
      <div className="pt-2 order-last md:-order-last w-full flex flex-col items-start justify-start gap-6">
      <div className="flex items-center justify-start gap-4">
        <div className="w-4 h-6 bg-blue-500 rounded-sm"></div>
        <h2 className="text-blue-500 font-semibold text-lg">Tody's</h2>
      </div>
      <h1 className="text-3xl font-semibold">Flash Sales</h1>
      </div>
      <div className="w-full flex items-center justify-center py-6 md:py-0">
      <OfferTimer duration={2 * 24 * 60 * 60 * 1000}/>
      </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 py-6">
        {products.map((item) => <ProductCard key={item?._id} product={item}/>)}
      </div>
      <div className="flex items-center justify-center py-6">
        <Button radius="sm" as={Link} href="/all-products" className="bg-blue-500 text-white font-medium" endContent={<FaArrowRightLong size={18}/>}>
          View All Products
        </Button> 
      </div>
    </div>
  )
}

export default FlashSeles
