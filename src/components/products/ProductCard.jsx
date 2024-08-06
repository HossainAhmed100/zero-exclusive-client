import {Card, CardHeader, CardBody, Image, Link} from "@nextui-org/react";

function ProductCard({product}) {
    const {title, price, discount,thumbnail, category, _id} = product;

    const commaSeparetor = (price) => {
      const options = {  maximumFractionDigits: 2 };
      const result = Intl.NumberFormat("en-US",options).format(price);
      return result;
    }
  return (
    <Link href={`/all-products/${_id}`}>
    <Card className="pb-4 bg-white hover:border-1 w-full hover:border-gray-200 transition shadow-sm rounded-md duration-700 ease-in-out border-1 border-transparent">
      {discount > 10 && 
      <div className="bg-gray-900 rounded-r-lg z-20 absolute items-center p-2 top-6 left-0">
        <p className="text-white font-bold text-tiny uppercase text-center">OFF {discount} Tk</p>
      </div>
      }
      <CardBody className="overflow-visible border-b items-center p-6">
      <Image
        alt="Card background"
        className="object-cover w-full h-32 object-center rounded-none transition duration-200 group-hover:scale-110"
        src={thumbnail}
      />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="text-[12px] font-normal text-gray-400">{category}</h4>
        <h4 className="text-[16px] font-normal text-gray-600 text-ellipsis line-clamp-2">{title}</h4>
        {/* <div className="flex items-center justify-center gap-1">
          <FaStar color="orange"/>
          <FaStar color="orange"/>
          <FaStar color="orange"/>
          <FaRegStar  color="orange"/>
          <FaRegStar  color="orange"/>
          <span className="text-[14px] text-default-500 ml-2">({rating})</span>
        </div> */}
        <div className="flex items-center justify-between w-full py-2">
          <div className="flex items-start flex-col justify-center">
            <p className="uppercase text-xl font-semibold text-gray-800">Tk. {commaSeparetor(price)}</p>
            <small className="text-default-400">You save Tk.{discount}</small>
          </div>
        </div>
      </CardHeader>
      
    </Card>
    </Link>
  )
}

export default ProductCard
