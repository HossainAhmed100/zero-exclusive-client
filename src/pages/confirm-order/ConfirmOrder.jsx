import { useForm } from "react-hook-form";
import { Avatar, Button, Divider, Image, Input, Link, RadioGroup, Radio, cn, useRadio, VisuallyHidden} from "@nextui-org/react";
import { Helmet } from "react-helmet-async";
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../../../firebase/firebase.config";
import { BdFlags } from "../../assets/icons/BdFlags";
import { TbTruckDelivery } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function ConfirmOrder() {
  // const [user] = useAuthState(auth);
  // Hook to manage form state, validation, and submission handling
  const [myCart, setMyCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [totalPrice, setTotalPrice] = useState(0);

  // Form submission handler
  const onSubmit = (data) => {
    console.log(data);
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
  return (
    <section>
    <Helmet title='Confirm Order | Zero Exclusive Online Shop'/>
    <div className="max-w-7xl mx-auto">
      <div className="py-16 px-4">
      <div className="border-1 flex-1 mb-4 bg-white border-gray-200 rounded-md">
        <div className="px-4 border-b-1 gap-2 py-2 flex flex-col md:flex-row items-center justify-between">
            <h1 className="text-xl font-medium flex items-center justify-center gap-2"><FaCartShopping size={24}/>Item in Cart</h1>
        </div>
        <div className="p-6 grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4">
            {myCart.map(item => (
                <CartItem
                    commaSeparator={commaSeparator}
                    key={item._id}
                    item={item}
                />
            ))}
        </div>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4'>
            <div className='md:col-span-2 border-1 bg-white border-gray-200 rounded-md'>
                <div className="px-4 border-b-1 gap-2 py-2 flex flex-col md:flex-row items-center justify-between">
                    <h1 className="text-xl font-medium flex items-center justify-center gap-2"><TbTruckDelivery size={24}/>Delivery info</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} >
                <div className="flex min-w-full p-6 flex-col gap-6 ">
                <div className="flex gap-4 md:flex-row flex-col">
                    <div className="flex-1">
                    <Input
                        isRequired
                        radius="sm"
                        size="lg"
                        type="text"
                        name="firstName"
                        label="First Name"
                        className="w-full"
                        variant="faded"
                        labelPlacement="outside"
                        placeholder="Type your Full Name"
                        {...register("firstName", { required: "Please enter your Name" })}
                        color={errors.firstName ? "danger" : "default"}
                    />
                    {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
                    </div>
                    <div className="flex-1">
                    <Input
                        isRequired
                        radius="sm"
                        size="lg"
                        type="text"
                        name="lastName"
                        label="Last Name"
                        className="w-full"
                        variant="faded"
                        labelPlacement="outside"
                        placeholder="Type your Full Name"
                        {...register("lastName", { required: "Please enter your Name" })}
                        color={errors.lastName ? "danger" : "default"}
                    />
                    {errors.lastName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
                    </div>
                </div>
                <div className="flex gap-4 md:flex-row flex-col">
                    <div className="flex-1">
                    <Input
                    isRequired
                    radius="sm"
                    size="lg"
                    type="email"
                    name="email"
                    label="Email"
                    className="w-full"
                    variant="faded"
                    labelPlacement="outside"
                    placeholder="Type Your Email"
                    {...register("email", { required: "Please enter your email", pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: "Email is not valid" } })}
                    color={errors.email ? "danger" : "default"}
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
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
                <div className="flex gap-4 md:flex-row flex-col">
                    <div className="flex-1">
                        <Input
                            isRequired
                            radius="sm"
                            size="lg"
                            type="text"
                            name="city"
                            label="City"
                            className="w-full"
                            variant="faded"
                            labelPlacement="outside"
                            placeholder="Type here"
                            {...register("city", { required: "This fields is required" })}
                            color={errors.city ? "danger" : "default"}
                        />
                        {errors.city && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>
                    <div className="flex-1">
                        <Input
                            isRequired
                            radius="sm"
                            size="lg"
                            type="number"
                            name="postCode"
                            label="Post / Zip Code"
                            className="w-full"
                            variant="faded"
                            labelPlacement="outside"
                            placeholder="Type here"
                            {...register("postCode", { required: "This fields is required" })}
                            color={errors.postCode ? "danger" : "default"}
                        />
                        {errors.postCode && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>
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
                {errors.address && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
                </div>
                </form>
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
                        <Button as={Link} href="/confirm-order" size="md" radius="sm" variant="solid" className="bg-black text-white font-medium">Confirm Order</Button>
                    </div>
                </div>
            </div>
        </div>
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

const CartItem = ({ item, commaSeparator }) => {
    return (
        <div className="border-1 rounded-md items-center py-4 p-4 justify-between">
            <div className="flex flex-col gap-2 items-start justify-start">
                <div className="rounded-md w-24 h-24 flex items-center justify-center">
                    <Image radius="md" src={item.thumbnail} alt={item.title} className="w-full h-20 object-contain" />
                </div>
                <div className="flex flex-col items-start justify-center">
                    <div className="w-48">
                        <h1 className="text-base font-normal text-gray-700">{item.title}</h1>
                    </div>  
                </div>
            <div className="flex items-center justify-center gap-3">
                <div>
                    <h1 className="text-tiny font-normal text-gray-700">Quantity: {item.quantity} x Tk.{commaSeparator(item.price)} / per item</h1>
                    <h1 className="text-base font-medium text-gray-900">Tk.{commaSeparator(item.price * item.quantity)}</h1>
                </div>
            </div>
            
            </div>
        </div>
    );
};


