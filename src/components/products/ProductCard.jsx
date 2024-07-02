import {Card, CardHeader, CardBody, Image, Link} from "@nextui-org/react";
import { FaStar, FaRegStar  } from "react-icons/fa6";

function ProductCard({product}) {
    const {model, price, discount, rating,thumbnail, category, _id} = product;

    const commaSeparetor = (price) => {
      const options = {  maximumFractionDigits: 2 };
      const result = Intl.NumberFormat("en-US",options).format(price);
      return result;
    }
    const percentage = (discount, price) => {
        const num = (100 * discount) / price;
        return parseFloat(num).toFixed(2)
    }
  return (
    <Link href={`/all-products/${_id}`}>
    <Card className="pb-4 bg-white hover:border-1 hover:border-gray-200 transition shadow-sm rounded-md duration-700 ease-in-out border-1 border-transparent">
      {discount > 10 && 
      <div className="bg-blue-500 rounded-r-lg z-10 absolute items-center p-2 top-6 left-0">
        <p className="text-white font-bold text-tiny uppercase text-center">OFF {percentage(discount, price)}%</p>
      </div>
      }
      <CardBody className="overflow-visible border-b items-center p-6">
      <Image
        alt="Card background"
        className="object-cover w-full h-32 object-center transition duration-200 group-hover:scale-110"
        src={thumbnail}
      />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="text-[12px] font-normal text-gray-400">{category}</h4>
        <h4 className="text-[16px] font-normal text-gray-600 text-ellipsis line-clamp-2">{model} {model} {model}{model} {model}</h4>
        <div className="flex items-center justify-center gap-1">
          <FaStar color="orange"/>
          <FaStar color="orange"/>
          <FaStar color="orange"/>
          <FaRegStar  color="orange"/>
          <FaRegStar  color="orange"/>
          <span className="text-[14px] text-default-500 ml-2">({rating})</span>
        </div>
        <div className="flex items-center justify-between w-full py-2">
          <div className="flex items-start flex-col justify-center">
            <p className="uppercase text-xl font-semibold text-gray-800">$ {commaSeparetor(price)}</p>
            <small className="text-default-400">You save ${discount}</small>
          </div>
        </div>
      </CardHeader>
      
    </Card>
    </Link>
  )
}

export default ProductCard
