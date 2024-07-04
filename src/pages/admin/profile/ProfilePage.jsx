import { Avatar, Button, Divider } from "@nextui-org/react";
import { Helmet } from "react-helmet-async";
import { FaPen } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiPlus } from "react-icons/hi";
import { RiVisaLine } from "react-icons/ri";

export default function MyProfile() {
  
  return (
    <div className="w-full">
      <Helmet title='My Account | Zephyra Online Shop'/>
      <div>
        <div className="flex items-start md:flex-row flex-col justify-start gap-2">
          <Avatar isBordered src="https://avatar.iran.liara.run/public" className="w-16 h-16 text-large" />
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-xl font-semibold text-gray-800">Md. Hossain Ahmed</h1>
            <div className="flex sm:items-center items-start justify-start gap-3 md:flex-row flex-col">
              <span className="text-gray-500">Email: hossain@gmail.com</span>
              <span className="text-gray-500">Phone: 018513132453</span>
              <Button isIconOnly color="default" size="sm" variant="light"><FaPen color="#787878"/></Button>
            </div>
          </div>
        </div>
        <Divider className="my-8 bg-[#F0EFEF]"/>
        <div>
          <p className="text-gray-400 text-base font-normal">Delivery Address</p>
          <div className="mt-4 flex flex-col items-start gap-4">
            <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
              <div className="bg-gray-100 flex items-center gap-2 p-4 rounded-lg">
                <div className="p-4 items-center text-gray-700 justify-center flex">
                  <FaLocationDot size={20}/>
                </div>
                <p className="text-gray-600 text-base">
                  Tashkant City, Street Name, Building 123, House 321 
                  <span className="text-gray-400 text-sm"> (Primiry Address)</span>
                </p>
                <Button isIconOnly variant="light" color="default" size="md">
                <BsThreeDotsVertical size={20} color="#787878"/>
                </Button>
              </div>
              <div className="bg-gray-100 flex items-center gap-2 p-4 rounded-lg">
                <div className="p-4 text-gray-700 items-center justify-center flex">
                  <FaLocationDot  size={20}/>
                </div>
                <p className="text-gray-600 text-base">
                  Tashkant City, Street Name, Building 123, House 321 
                  <span className="text-gray-400 text-sm"> (Primiry Address)</span>
                </p>
                <Button isIconOnly variant="light" color="default" size="md">
                  <BsThreeDotsVertical size={20} color="#787878"/>
                </Button>
              </div>
            </div>
            <Button 
              startContent={<HiPlus className="font-medium"/>} 
              radius="sm" 
              className="text-gray-800 border font-semibold border-default-300 shadow bg-transparent">
              Add new address
            </Button>
          </div>
        </div>
        <Divider className="my-8 bg-[#F0EFEF]"/>
        <div>
          <p className="text-gray-400 text-base font-normal">Payment methods</p>
          <div className="mt-4 flex flex-col gap-4">
            <div className="grid md:grid-cols-2 flex-1 gap-4 grid-cols-1">
              <div className="bg-gray-100 flex w-full items-center gap-2 p-4 rounded-lg">
                <div className="rounded-md shadow-md py-1 px-3 items-center justify-center flex">
                  <RiVisaLine color="blue" size={35}/>
                </div>
                <div className="flex-1">
                  <p className="text-gray-500 font-normal text-md">Visa****9905</p>
                  <span className="text-tiny text-gray-400">Expires 12/21</span>
                </div>
                <Button isIconOnly variant="light" color="default" size="md">
                <BsThreeDotsVertical size={20} color="#787878"/>
                </Button>
              </div>
            </div>
            <Button 
              startContent={<HiPlus className="font-medium"/>} 
              radius="sm" 
              className="text-gray-800 w-44 border font-semibold border-default-300 shadow bg-transparent">
              Add new address
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
