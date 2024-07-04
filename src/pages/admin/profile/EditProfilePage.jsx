import { useForm } from "react-hook-form";
import { Avatar, Button, Divider, Input } from "@nextui-org/react";
import { Helmet } from "react-helmet-async";
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../../../firebase/firebase.config";
import { BdFlags } from "../../../assets/icons/BdFlags";
import { FaCamera, FaTrash  } from "react-icons/fa";

export default function EditProfilePage() {
  // const [user] = useAuthState(auth);
  // Hook to manage form state, validation, and submission handling
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Form submission handler
  const onSubmit = (data) => {
    console.log(data);
  };
  
  return (
    <div className="w-full">
      <Helmet title='Update Profile | Zephyra Online Shop'/>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-3 grid-cols-1 gap-4">
        <div className="flex min-w-full flex-col gap-6 md:col-span-2">
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
          <Button type="submit" className="bg-gray-900 w-44 text-white shadow-lg">Save Changes</Button>
        </div>
        <div className="order-first md:order-last">
          <div className="flex items-center flex-col justify-center gap-4">
            <Avatar 
            isBordered
            src="https://avatar.iran.liara.run/public" 
            className="w-44 h-44 text-large" />
            <div className="flex items-center justify-center gap-2">
              <Button color="default" variant="bordered" radius="sm" endContent={<FaCamera/>}>
                Upload
              </Button> 
              <Button color="default" variant="bordered" radius="sm" isIconOnly>
                <FaTrash />
              </Button> 
            </div>
            <p className="text-tiny text-default-500">Up to 1 MB (300x300 px)</p>
          </div>
        </div>
        </form>
      </div>
      <Divider className="my-16"/>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="p-4 rounded-md border border-default-300 flex items-start justify-between gap-2">
          <div className="gap-2">
            <h4 className="text-base font-semibold text-gray-800">Password</h4>
            <span className="text-tiny font-normal text-default-400">You can change or reset your password bt clicking here</span>
          </div>
          <Button color="primary" size="sm" variant="flat">
            Change
          </Button> 
        </div>
        <div className="p-4 rounded-md border border-default-300 flex items-start justify-between gap-2">
          <div className="gap-2">
          <h4 className="text-base font-semibold text-gray-800">Remove Account</h4>
          <span className="text-tiny font-normal text-default-400">Once you delete your account, there is no going back</span>
          </div>
          <Button color="danger" size="sm" className="px-4" variant="flat">
            Deactivate
          </Button>  
        </div>
      </div>
    </div>
  )
}

