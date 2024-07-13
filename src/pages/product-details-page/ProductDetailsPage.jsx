import { useState } from 'react';
import { FaPlus, FaMinus, FaStar, FaHeart } from 'react-icons/fa';
import { Avatar, Button, Divider, Progress, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from '@nextui-org/react';
import { FaCartShopping } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import { IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { TbMessageReport } from "react-icons/tb";
import { Helmet } from 'react-helmet-async';
import SimilarProducts from '../../components/products/similar-products/SimilarProducts';
import Breadcrumb from '../../components/breadcrumbs/BreadCrumbs';

const ProductDetailsPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('XS');
  const [selectedColor, setSelectedColor] = useState('Red');
  const [mainImage, setMainImage] = useState('https://i.ibb.co/mHQ61dS/playstations.png');
  const [selectedImage, setSelectedImage] = useState('https://i.ibb.co/mHQ61dS/playstations.png');

  const product = {
    name: 'Havic HV G-92 Gamepad',
    price: 192,
    rating: 4.5,
    reviews: 150,
    availability: 'In Stock',
    description: 'Playstation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
    colors: ['Red', 'Black', 'Blue'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://i.ibb.co/mHQ61dS/playstations.png',
      'https://i.ibb.co/3s7hJKD/laptop.png',
      'https://i.ibb.co/92nThYH/dfdf.jpg',
      'https://i.ibb.co/mHQ61dS/playstations.png'
    ],
  };

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(0, prev + change));
  };

  const commaSeparator = (price) => {
    return new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(price);
  };


  return (
    <div className='max-w-6xl px-4 mx-auto py-10'>
    <Helmet title={`${product?.name} | Zephyra Online Shop`}/>
    <div className="pb-8">
        <Breadcrumb />
      </div>
    <div className="grid md:grid-cols-2 grid-cols-1 gap-6 items-start">
      <div className="grid gap-4">
        <div className="grid gap-4">
          <img
            alt="product"
            className="aspect-square object-contain  bg-gray-100 p-4 border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
            src={mainImage}
          />
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((img, index) => (
              <img 
                key={index} 
                alt={`product thumbnail ${index + 1}`} 
                src={img} 
                className={`w-full bg-gray-100 rounded-md h-full aspect-square p-2 object-contain cursor-pointer ${selectedImage === img ? 'border-2 border-gray-200' : ''}`}
                onClick={() => { setMainImage(img); setSelectedImage(img); }}
              />
            ))}
          </div>
        </div>
      </div>
        <div className="grid gap-4 md:gap-6 items-start">
          <div className="grid gap-2">
            <h1 className="font-bold text-3xl lg:text-4xl">{product.name}</h1>
            <div className="flex items-center">
              <span className="text-yellow-500 flex items-start justify-center gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <span className="ml-2 text-gray-600">({product.reviews} Reviews) |</span>
              <span className="ml-2 text-green-500">{product.availability}</span>
            </div>
            <p className="text-2xl font-semibold">${commaSeparator(product.price)}</p>
            <p>{product.description}</p>
          </div>
          <Divider className='text-gray-300'/>
          <form className="grid gap-6">
            <div className="grid gap-2">
              <span className="text-base">Colours:</span>
              <div className="flex gap-2">
                {product.colors.map((color, index) => (
                  <Button
                    size='sm'
                    key={index}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    variant="flat"
                    className={`${selectedColor === color ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'}`}
                  >
                    {color}
                  </Button>
                ))}
              </div>
            </div>
            <div className="grid gap-2">
              <span className="text-base">Size:</span>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <Button
                    size='sm'
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    variant="flat"
                    className={`${selectedSize === size ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'}`}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 justify-center">
              <span className="text-base">Quantity:</span>
              <div className="flex items-center gap-2 border-2 rounded-md border-gray-300">
                <Button
                  type="button"
                  onClick={() => handleQuantityChange(-1)}
                  radius="sm"
                  isIconOnly
                  color="default"
                  variant="flat"
                  size='sm'
                  className='border-r-2 border-gray-300 rounded-none'
                >
                  <FaMinus size={14} />
                </Button>
                <span className='px-4 w-16 text-center'>{quantity}</span>
                <Button
                  type="button"
                  onClick={() => handleQuantityChange(1)}
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
            </div>
            <div className="flex gap-2 lg:flex-row items-end justify-center">
              <Button radius='sm' startContent={<FaCartShopping size={20}/>} type="submit" className="bg-black text-white flex-1" size="md">
                Add To Cart
              </Button>
              <Button radius='sm' color='default' variant='flat' isIconOnly>
                <FaHeart />
              </Button>
            </div>
            
          </form>
          <div className="grid gap-2 mt-2 ml-4">
          <span className='text-base font-medium text-gray-700 underline'>Benefits</span>
          <ul className="list-disc">
              <li>Warranty included</li>
              <li>Free return within 30 days</li>
              <li>Damage and theft insurance</li>
            </ul>
          </div>
        </div>
    </div>
    <div className='lg:py-16 md:py-8 py-4'>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
        <div className='md:col-span-2 bg-white p-6 rounded-md shadow'>
          <div className='w-full pb-6'><h1 className='text-gray-800 text-xl font-semibold'>Reviews</h1></div>
          <div>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>
        <div className='lg:order-1 flex flex-col h-fit gap-5 bg-white p-6 rounded-md shadow'>
          <Button color="primary" variant="flat" className='w-full' radius='sm'>Write a review</Button>
          <div className='flex items-center justify-normal gap-3'>
            <div className='flex items-center justify-start gap-1'>
              {[1,2,3,].map(item => <FaStar key={item} size={24} className='text-orange-400'/>)}
              <FaStar size={24} className='text-gray-300'/>
              <FaStar size={24} className='text-gray-300'/>
            </div>
            <div>
              <span className='text-2xl text-black font-semibold mr-'>3.7</span>
              <span className='text-[14px] text-gray-400 font-normal'> / 320 reviews</span>
            </div>
          </div>
          <div className='flex items-start gap-3 flex-col w-full justify-normal'>
            <RatingProgressBar number={5} rating={30}/>
            <RatingProgressBar number={4} rating={40}/>
            <RatingProgressBar number={3} rating={80}/>
            <RatingProgressBar number={2} rating={70}/>
            <RatingProgressBar number={1} rating={20}/>
          </div>
        </div>
      </div>
    </div>
    <div>
      <SimilarProducts />
    </div>
    </div>
  );
};

const ReviewCard = () => {
  return(
    <div className='flex py-3 items-start gap-4 justify-normal'>
      <div><Avatar isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026024d" /></div>
      <div className='flex flex-col items-start justify-center gap-2 w-full'>
        <div className='flex items-center justify-between w-full'>
          <div className='flex items-start justify-center flex-col gap-1'>
            <h1 className='text-base text-gray-800 font-medium'>Hossain Ahmed</h1>
            <div className='flex flex-col items-start justify-start md:flex-row gap-2'>
              <div className='flex items-center justify-start gap-1'>
                {[1,2,3,].map(item => <FaStar key={item} size={14} className='text-orange-300'/>)}
                <FaStar size={14} className='text-gray-300'/>
                <FaStar size={14} className='text-gray-300'/>
              </div>
              <div className='flex items-start  justify-start gap-2'>
                <LuDot className='text-[14px] md:flex hidden text-gray-400'/>
                <span className='text-tiny text-gray-500'>Wed, May 12</span>
              </div>
            </div>
          </div>  
          <div className='flex items-center justify-between gap-2'>
            <Button isIconOnly variant='light' color='default'>
              <IoMdThumbsUp size={16} className='text-gray-400'/> 
            </Button>
            <Button isIconOnly variant='light' color='default'>
              <IoMdThumbsDown size={16} className='text-gray-400'/> 
            </Button>
          </div>
        </div>
        <p className='text-gray-500 text-[14px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo tempora eius quos rem, ducimus dolor. Voluptatem, blanditiis animi tempora enim illo harum fugiat quaerat voluptatum.
        </p>
      </div>
      <Dropdown placement='bottom-end'>
        <DropdownTrigger>
          <Button isIconOnly color='default' variant='light'>
            <HiOutlineDotsVertical size={24} className='text-gray-400'/>
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Action event example" >
          <DropdownItem startContent={<TbMessageReport />} key="reportAbuse">Report abouse</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    </div>
  )
}

const RatingProgressBar = ({number, rating}) => {
  return(
    <div className='flex w-full items-center justify-normal gap-3'>
      <div className='flex items-center w-10 justify-between gap-1'>
        <span className='text-gray-400'>{number}</span> 
        <FaStar className='text-gray-300'/>
      </div> 
      <Progress color="warning" aria-label="Loading..." value={rating} />
    </div>
  )
}


export default ProductDetailsPage;
