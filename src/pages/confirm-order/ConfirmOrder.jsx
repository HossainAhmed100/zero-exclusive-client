import { useForm } from "react-hook-form";
import { Button, Divider, Image, Input, RadioGroup, cn, useRadio, VisuallyHidden} from "@nextui-org/react";
import { Helmet } from "react-helmet-async";
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../../../firebase/firebase.config";
import { BdFlags } from "../../assets/icons/BdFlags";
import { TbTruckDelivery } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { FaPlus, FaMinus } from 'react-icons/fa';
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function ConfirmOrder() {
  // const [user] = useAuthState(auth);
  // Hook to manage form state, validation, and submission handling
  const [myCart, setMyCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const axiosSecure = useAxiosSecure();
  // Navigation hook for programmatically navigating routes
  const navigate = useNavigate();

  const from = "/";

  // Form submission handler
  const onSubmit = async (data) => {
    console.log(data);
    const newData = {...data, myCart}
    try {
      const response = await axiosSecure.post('/orders/', newData);
      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Order Added Successfully!",
        });
        // Redirect user to the specified 'from' path
        navigate(from, { replace: true });
      } else {
        Swal.fire({
          icon: "warning",
          title: "Something went wrong",
        });
      }
    } catch (err) {
      console.error('Error adding product to database:', err);
    } finally {
      setLoading(false);
    }
  };

  const commaSeparator = (price) => {
    return new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(price);
  }
  useEffect(() => {
    calculateTotalPrice();
  }, [myCart]);

  const calculateTotalPrice = () => {
    const total = myCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  };
  const handleQuantityChange = (itemKey, change) => {
    const updatedCart = myCart.map(item => {
        if (item.itemKey === itemKey) {
            return { ...item, quantity: Math.max(1, item.quantity + change) };
        }
        return item;
    });
    setMyCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  const handleRemoveItem = (itemKey) => {
    const updatedCart = myCart.filter(item => item.itemKey === itemKey);
    setMyCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  return (
    <section>
    <Helmet title='Confirm Order | Zero Exclusive Online Shop'/>
    <div className="max-w-7xl mx-auto">
      <div className="py-16 px-4">
        <div className="border-1 flex-1 mb-4 bg-white border-gray-200 rounded-md">
        <div className="px-4 border-b-1 gap-2 py-2 flex flex-col md:flex-row items-center justify-between">
                    <h1 className="text-xl font-medium flex items-center justify-center gap-2"><FaCartShopping size={24}/>Shopping Cart</h1>
                </div>
            <div className="relative divide-y-1 p-4 flex flex-col overflow-x-auto">
               {myCart.map(item => <ItemCart  
                  handleRemoveItem={handleRemoveItem}
                  handleQuantityChange={handleQuantityChange}
                  commaSeparator={commaSeparator}
                  key={item.itemKey}
                  item={item}
                />)}
            </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} >
        <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4'>
            <div className='md:col-span-2 border-1 bg-white border-gray-200 rounded-md'>
                <div className="px-4 border-b-1 gap-2 py-2 flex flex-col md:flex-row items-center justify-between">
                    <h1 className="text-xl font-medium flex items-center justify-center gap-2"><TbTruckDelivery size={24}/>Delivery info</h1>
                </div>
                <div className="flex min-w-full p-6 flex-col gap-6 ">
                <div className="flex gap-4 md:flex-row flex-col">
                    <div className="flex-1">
                    <Input
                      isRequired
                      radius="sm"
                      size="lg"
                      type="text"
                      name="fulName"
                      label="Your Name"
                      className="w-full"
                      variant="faded"
                      labelPlacement="outside"
                      placeholder="Type your Full Name"
                      {...register("fullName", { required: "Please enter your Name" })}
                      color={errors.fullName ? "danger" : "default"}
                    />
                    {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName.message}</span>}
                    </div>
                    <div className="flex-1">
                    <Input
                        startContent={
                        <div className="border-r-2 pr-2 flex items-center justify-start gap-1">
                            <BdFlags width="20" height="20" />
                            <span className="text-[14px] font-medium text-gray-600">+880</span>
                        </div>
                        }
                        isRequired
                        radius="sm"
                        size="lg"
                        type="tel"
                        name="phone"
                        label="Phone"
                        className="w-full"
                        variant="faded"
                        labelPlacement="outside"
                        placeholder="018-0000-0000"
                        {...register("phone", { required: "Please enter your Phone", pattern: {
                        value: /^[0-9]{11}$/,
                        message: "Phone number must be exactly 11 digits"
                        }})}
                        color={errors.phone ? "danger" : "default"}
                    />
                    {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
                    </div>
                </div>
                <div className="flex-1">
                    <Input
                      isRequired
                      radius="sm"
                      size="lg"
                      type="text"
                      name="email"
                      label="Your Email"
                      className="w-full"
                      variant="faded"
                      labelPlacement="outside"
                      placeholder="Type your Full Name"
                      {...register("email", { required: "Please enter your Name" })}
                      color={errors.email ? "danger" : "default"}
                    />
                  {errors.fullName && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                  </div>
                <Input
                    isRequired
                    radius="sm"
                    size="lg"
                    type="text"
                    name="address"
                    label="Address"
                    className="w-full"
                    variant="faded"
                    labelPlacement="outside"
                    placeholder="Type your Full Name"
                    {...register("address", { required: "Please enter your Name" })}
                    color={errors.address ? "danger" : "default"}
                />
                {errors.address && <span className="text-red-500 text-sm">{errors.address.message}</span>}
                </div>
            </div>
            <div className="border-1 w-full h-fit  bg-white border-gray-200 rounded-md">
                <div className="px-4 border-b-1 gap-2 py-2 flex flex-col md:flex-row items-center justify-between">
                    <h1 className="text-xl font-medium flex items-center justify-center gap-2"><MdPayment size={24}/>Payment Method</h1>
                </div>
                <div className="p-4 space-y-4">
                    <div className="flex items-center justify-between"><span>Total Price:</span> <span>Tk. {commaSeparator(totalPrice)}</span></div>
                    <div className="flex items-center justify-between"><span>Delivery Charge:</span> <span>Tk.150</span></div>
                    <div className="flex items-center text-lg font-medium justify-between"><span>Total:</span> <span>Tk. {commaSeparator(totalPrice + 150)}</span></div>
                    <Divider />
                    <div className="flex flex-col gap-4">
                    <RadioGroup defaultValue="cashondelivery">
                        <CustomRadio description="pay when your order arrives at your doorstep" value="cashondelivery">
                            Cash on Delivery
                        </CustomRadio>
                    </RadioGroup>
                    </div>
                    <Divider />
                    <div className="flex flex-col gap-4">
                        <Button isLoading={loading} isDisabled={loading} type="submit" size="md" radius="sm" variant="solid" className="bg-black text-white font-medium">Confirm Order</Button>
                    </div>
                </div>
            </div>
        </div>
        </form>
      </div>
    </div>
    </section>
  )
}

const CustomRadio = (props) => {
    const {
        Component,
        children,
        description,
        getBaseProps,
        getWrapperProps,
        getInputProps,
        getLabelProps,
        getLabelWrapperProps,
        getControlProps,
      } = useRadio(props);
  
    return (
        <Component
        {...getBaseProps()}
        className={cn(
          "group inline-flex items-center hover:opacity-70 active:opacity-50 justify-between flex-row-reverse tap-highlight-transparent",
          " cursor-pointer border-2 border-default rounded-lg gap-4 p-4",
          "data-[selected=true]:border-primary",
        )}
      >
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <span {...getWrapperProps()}>
          <span {...getControlProps()} />
        </span>
        <div {...getLabelWrapperProps()}>
          {children && <span {...getLabelProps()}>{children}</span>}
          {description && (
            <span className="text-small text-foreground opacity-70">{description}</span>
          )}
        </div>
      </Component>
    );
};

const ItemCart = ({ item, commaSeparator, handleQuantityChange, handleRemoveItem }) => {
  return(
    <div className="flex items-center py-4 justify-normal gap-4">
      <div className="flex flex-col gap-1 items-center justify-center">
        <div className="rounded-md border-1 w-24 h-24 flex flex-col items-center justify-center">
            <Image radius="md" src={item.thumbnail} alt={item.title} className="w-full h-20 object-contain" />
        </div>
        <div className="flex md:hidden">
            <Button onClick={() => handleRemoveItem(item.itemKey)} radius="sm" color="danger" variant="flat" size="sm">
                <span>Remove</span>
            </Button>
            </div>
      </div>
      <div className="flex-1 flex  flex-col md:flex-row items-center justify-normal">
        <div>
          <div className="flex flex-col items-start justify-center">
            <div className="w-56">
                <h1 className="text-base text-ellipsis line-clamp-2 font-normal text-gray-700">{item.title}</h1>
            </div>
            <div>
            <span className="text-tiny text-gray-400">{Object.entries(item.attributes).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
              ))}
            </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-around flex-1 gap-3">
            <div>
                <h1 className="text-base font-medium text-gray-900">Tk.{commaSeparator(item.price)}</h1>
                <h1 className="text-tiny font-light line-through text-gray-500">Tk.{commaSeparator(item.discount ? item.discount : 0)}</h1>
            </div>
            <div className="flex items-center gap-2 border-2 rounded-md border-gray-300">
                <Button
                    type="button"
                    onClick={() => handleQuantityChange(item.itemKey, -1)}
                    radius="sm"
                    isIconOnly
                    color="default"
                    variant="flat"
                    size='sm'
                    className='border-r-2 border-gray-300 rounded-none'
                >
                    <FaMinus size={14} />
                </Button>
                <span className='px-4 w-12 text-center'>{item.quantity}</span>
                <Button
                    type="button"
                    onClick={() => handleQuantityChange(item.itemKey, 1)}
                    radius="sm"
                    isIconOnly
                    color="default"
                    variant="flat"
                    size='sm'
                    className='border-l-2 border-gray-300 rounded-none'
                >
                    <FaPlus size={14} />
                </Button>
            </div>
            <div className="md:flex hidden">
            <Button onClick={() => handleRemoveItem(item.itemKey)} radius="sm" color="danger" variant="flat" size="md">
                <span>Remove</span>
            </Button>
            </div>
        </div>
      </div>
    </div>
  )
}


