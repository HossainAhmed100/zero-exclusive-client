import {RadioGroup, Radio, cn, Button} from "@nextui-org/react";
import { useState } from "react";
import { FaPlus, FaMinus, FaStar } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";


export const CustomRadio = (props) => {
  const {children, ...otherProps} = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          "group flex items-center hover:opacity-70 active:opacity-50 justify-start tap-highlight-transparent",
        "min-w-[70px] cursor-pointer border-2 border-default rounded-md gap-1 mr-2",
        "data-[selected=true]:border-primary",
        ),
      }}
      size="sm"
    >
      {children}
    </Radio>
  );
};

export default function Component() {
  const [quantity, setQuantity] = useState(1);
  const shoe = useLoaderData();
  const decressQuantity = () => {
    if(quantity > 0){
      setQuantity(quantity - 1)
    }
  }
  const commaSeparetor = (price) => {
    const options = {  maximumFractionDigits: 2 };
    const result = Intl.NumberFormat("en-US",options).format(price);
    return result;
  }
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-7xl px-4 mx-auto py-10">
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-4">
          <img
            alt="Shoe"
            className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
            height={600}
            src={shoe?.image_url}
            width={600}
          />
        </div>
      </div>
      <div className="grid gap-4 md:gap-6 items-start">
        <div className="grid gap-2">
          <h1 className="font-bold text-3xl lg:text-4xl">{shoe?.title}</h1>
          <div>
            <p>{shoe?.description}</p>
          </div>
          <div className="flex items-center justify-start gap-10 w-full py-2">
          <div className="flex items-center justify-start gap-2">
            <p className="uppercase text-2xl font-semibold">Tk. {commaSeparetor(shoe?.price)}</p>
            <small className="text-default-500 line-through">Tk.500</small>
            <small className="text-default-500 font-medium">20% off</small>
          </div>
          <Button 
          className="max-w-[50px] font-medium text-yellow-500" 
          variant="ghost" 
          color="default" 
          size="md" startContent={<FaStar size={20}/>}>{4.8}</Button>
          </div>
        </div>
        <form className="grid gap-4 md:gap-10">
          <RadioGroup orientation="horizontal" label="Color">
            <CustomRadio value="black">Black</CustomRadio>
            <CustomRadio value="white">White</CustomRadio>
            <CustomRadio value="blue">Blue</CustomRadio>
          </RadioGroup>
          <div className="grid gap-2">
            <RadioGroup orientation="horizontal" label="Size">
              <CustomRadio value="free">S</CustomRadio>
              <CustomRadio value="pro">M</CustomRadio>
              <CustomRadio value="enterprise">L</CustomRadio>
            </RadioGroup>
          </div>
          <div className="grid gap-2">
            <span className="text-base" htmlFor="quantity">
              Quantity
            </span>
            <div className="flex items-center gap-2">
              <Button onClick={decressQuantity} radius="sm" isIconOnly color="default" variant="faded" aria-label="Take a photo">
                <FaMinus size={14}/>
              </Button>
              <Button radius="sm" color="default" variant="faded" aria-label="Take a photo">
                {quantity}
              </Button>
              <Button onClick={() => setQuantity(quantity + 1)} radius="sm" isIconOnly color="default" variant="faded" aria-label="Take a photo">
                <FaPlus size={14}/>
              </Button>
            </div>
          </div>
          <Button className="bg-black text-white" size="lg">Add to cart</Button>
        </form>
      </div>
    </div>
  )
}