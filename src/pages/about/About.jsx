import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { RiShoppingCartFill } from "react-icons/ri";
import { LuCircleDollarSign, LuShoppingBag } from "react-icons/lu";
import { FaSackDollar } from "react-icons/fa6";
import { CiTwitter, CiInstagram, CiLinkedin } from "react-icons/ci";
import TopService from "../../components/products/top-service/TopService";
import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumbs/BreadCrumbs";

function About() {
  return (
    <>
      <Helmet title='About | Zero Exclusive Online Shop'/>
      
      <div className="max-w-7xl m-auto">
        {/* Our Story Section */}
        <section className="py-6 lg:py-10 px-4 md:px-8 bg-white">
          <div className="pb-8"><Breadcrumb /></div>
          <div>
            <div className="grid gap-8 md:grid-cols-2 lg:gap-16">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Our Story
                </h1>
                <p className="mt-10 max-w-[600px] text-gray-600 md:text-base">
                  Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range 300 brands and serves 3 million customers across the region.
                </p>
                <p className="mt-4 max-w-[600px] text-gray-600 md:text-base">
                  Exclusive has more than 1 million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in categories ranging from consumer electronics to fashion.
                </p>
              </div>
              <img
                src="https://i.ibb.co/30D1SDM/q.png"
                width="600"
                height="400"
                alt="Hero"
                className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </section>
        

        <TopService />
      </div>
    </>
  );
}



export default About;
