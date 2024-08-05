import { MdOutlineCall, MdOutlineMail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { Button, Input, Textarea, Card, CardBody } from "@nextui-org/react";
import { BdFlags } from "../../assets/icons/BdFlags";
import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumbs/BreadCrumbs";

function Contact() {
  // Hook to manage form state, validation, and submission handling
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Form submission handler
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="bg-white">
      <Helmet title='Contact | Zero Exclusive Online Shop'/>
      <div className="max-w-7xl mx-auto py-24 px-4">
        <div className="pb-4"><Breadcrumb /></div>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Contact Information Card */}
          <Card className="rounded-sm shadow-none">
            <CardBody>
              {/* Call Us Section */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-start gap-3">
                  <Button isIconOnly color="default" variant="flat">
                    <MdOutlineCall size={24} />
                  </Button>
                  <h1 className="text-lg font-medium text-gray-800">Call To Us</h1>
                </div>
                <h1 className="text-base text-gray-700">We are available 24/7, 7 days a week.</h1>
                <h1 className="text-tiny md:text-base text-gray-700">Phone: +8801611112222</h1>
              </div>

              {/* Write To Us Section */}
              <div className="flex mt-4 flex-col gap-4">
                <div className="flex items-center justify-start gap-3">
                <Button isIconOnly color="default" variant="flat">
                    <MdOutlineMail size={24} />
                  </Button>
                  <h1 className="text-lg font-medium text-gray-800">Write To Us</h1>
                </div>
                <h1 className="text-base  text-gray-700">
                  Fill out our form and we will contact you within 24 hours.
                </h1>
                <h1 className="text-tiny md:text-base text-gray-700">Email: customer@exclusive.com</h1>
                <h1 className="text-tiny md:text-base text-gray-700">Email: support@exclusive.com</h1>
              </div>
            </CardBody>
          </Card>

          {/* Contact Form */}
          <div className="flex-1 rounded-sm shadow-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="flex min-w-full flex-col gap-4">
              <div className="flex gap-4 md:flex-row flex-col">
                <div className="flex-1">
                  <Input
                    isRequired
                    radius="sm"
                    size="md"
                    type="text"
                    name="fullName"
                    label="Full Name"
                    className="w-full"
                    variant="bordered"
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
                    size="md"
                    type="tel"
                    name="phone"
                    label="Phone"
                    className="w-full"
                    variant="bordered"
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
                size="md"
                type="email"
                name="email"
                label="Email"
                className="w-full"
                variant="bordered"
                labelPlacement="outside"
                placeholder="Type Your Email"
                {...register("email", { required: "Please enter your email", pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: "Email is not valid" } })}
                color={errors.email ? "danger" : "default"}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
              <Textarea
                isRequired
                radius="sm"
                label="Your Message"
                labelPlacement="outside"
                placeholder="Write something..."
                className="w-full"
                variant="bordered"
                {...register("customerMessage", { required: "Please write something" })}
                classNames={{ inputWrapper: ["bg-white"] }}
                isInvalid={!!errors.customerMessage}
                color={errors.customerMessage ? "danger" : "default"}
                errorMessage={errors.customerMessage && "Please write your message."}
              />
              {errors.customerMessage && <span className="text-red-500 text-sm">{errors.customerMessage.message}</span>}
              <Button type="submit" className="bg-gray-900 text-white shadow-lg" variant="solid">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
