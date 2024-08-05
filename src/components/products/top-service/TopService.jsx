import { LiaShippingFastSolid } from "react-icons/lia";
import { LuShieldCheck } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { Card, CardBody } from "@nextui-org/react";

function TopService() {
  return (
        <section className="py-6 sm:py-8 lg:py-16 px-4 md:px-8">
          <div className="m-auto">
            <div className="grid gap-6 md:grid-cols-3">
              <InfoCard 
                icon={<LiaShippingFastSolid size={24} color="white" />} 
                title={"FREE AND FAST DELIVERY"} 
                description={"Free delivery for all orders over $140"} 
              />
              <InfoCard 
                icon={<BiSupport size={24} color="white" />} 
                title={"24/7 CUSTOMER SERVICE"} 
                description={"Friendly 24/7 customer support"} 
              />
              <InfoCard 
                icon={<LuShieldCheck size={24} color="white" />} 
                title={"EASY RETURNS AND EXCHANGES"} 
                description={"Hassle-Free Returns and Exchanges"} 
              />
            </div>
          </div>
        </section>
  )
}


// InfoCard Component: Displays information about a service offered by the company
const InfoCard = ({ title, description, icon }) => {
    return (
      <Card className="shadow-none h-52">
        <CardBody className="flex flex-col items-center justify-center gap-3 text-center">
          <div className="border-8 border-gray-300 p-2 bg-gray-800 rounded-full w-16 h-16 items-center justify-center flex">
            {icon}
          </div>
          <div className="text-[20px] font-semibold">{title}</div>
          <p className="text-gray-500 text-[14px]">{description}</p>
        </CardBody>
      </Card>
    );
  };

export default TopService
