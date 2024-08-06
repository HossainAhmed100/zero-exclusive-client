import { useState } from 'react';
import { FaPlus, FaMinus, FaStar, FaHeart } from 'react-icons/fa';
import { Button, Divider} from '@nextui-org/react';
import { FaCartShopping } from "react-icons/fa6";
import { Helmet } from 'react-helmet-async';
import SimilarProducts from '../../components/products/similar-products/SimilarProducts';
import Breadcrumb from '../../components/breadcrumbs/BreadCrumbs';
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';
import { generateRandomKey } from '../../utils/randomKeyGenerator/randomKeyGenerator';

const ProductDetailsPage = () => {
  const {title, price, thumbnail, description, morePhotos, _id, brand, sku, category} = useLoaderData();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('XS');
  const [selectedColor, setSelectedColor] = useState('Red');
  const [mainImage, setMainImage] = useState(thumbnail);
  const [selectedImage, setSelectedImage] = useState('https://i.ibb.co/mHQ61dS/playstations.png');

  const product = {
    availability: 'In Stock',
    colors: ['Red', 'Black', 'Blue'],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  };

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(0, prev + change));
  };

  const commaSeparator = (price) => {
    return new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(price);
  };

  const handleAddToCard = (e) => {
    const newKy = generateRandomKey();
    const attributes = {color: selectedColor, size: selectedSize};
    const item = { itemKey: newKy ,title, productId: _id, brand, category, price, sku, quantity, thumbnail, attributes};
    const oldCart = JSON.parse(localStorage.getItem('cart')) || [];
    const cart = [...oldCart, item];
    localStorage.setItem('cart', JSON.stringify(cart));
    
    toast.success('Successfully Added!')
    // e.preventDefault();
  };


  return (
    <div className='max-w-7xl px-4 mx-auto py-10'>
    <Helmet title={`${title} | Zephyra Online Shop`}/>
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
            {morePhotos.map((img, index) => (
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
            <h1 className="font-bold text-3xl lg:text-4xl">{title}</h1>
            <div className="flex items-center">
              <span className="text-yellow-500 flex items-start justify-center gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <span className="ml-2 text-gray-600">({0} Reviews) |</span>
              <span className="ml-2 text-green-500">{product.availability}</span>
            </div>
            <p className="text-2xl font-semibold">Tk. {commaSeparator(price)}</p>
            <p>{description}</p>
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
              <Button onPress={() => handleAddToCard()} radius='sm' startContent={<FaCartShopping size={20}/>} type="submit" className="bg-black text-white flex-1" size="md">
                Add To Cart
              </Button>
              <Button radius='sm' color='default' variant='flat' isIconOnly>
                <FaHeart />
              </Button>
            </div>
            
          </form>
          
        </div>
    </div>
    <div className='lg:py-16 md:py-8 py-4'>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
        <div className='md:col-span-2 bg-white p-6 rounded-md shadow'>
        <div className='w-full pb-6'><h1 className='text-gray-800 text-xl font-semibold'>Prodcut Description</h1></div>
          <div>
            {description}
          </div>
        </div>
        <div className='flex flex-col h-fit gap-5 p-6'>
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
    </div>
    <div>
      <SimilarProducts />
    </div>
    </div>
  );
};


export default ProductDetailsPage;
