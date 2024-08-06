import { Button, Divider, Image, Link } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FaPlus, FaMinus } from 'react-icons/fa';

function MyCart() {
    const [myCart, setMyCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [totalPrice, setTotalPrice] = useState(0);

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
        const updatedCart = myCart.filter(item => item.itemKey !== itemKey);
        setMyCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const commaSeparator = (price) => {
        return new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(price);
    };

    return (
        <section>
            <Helmet title='My Shopping Cart | Zephyra Online Shop '/>
            <div className="max-w-7xl mx-auto">
                <div className="py-16 px-4">
                    <div className="lg:flex gap-4 items-start justify-center">
                        <div className="border-1 flex-1 bg-white border-gray-200 rounded-md">
                            <div className="px-4 border-b-1 gap-2 py-2 flex flex-col md:flex-row items-center justify-between">
                                <h1 className="text-xl font-medium">Shopping Cart</h1>
                            </div>
                            <div className="p-6 divide-y-1">
                                {myCart.map(item => (
                                    <ItemCard
                                        handleRemoveItem={handleRemoveItem}
                                        handleQuantityChange={handleQuantityChange}
                                        commaSeparator={commaSeparator}
                                        key={item.itemKey}
                                        item={item}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="border-1 min-w-96 bg-white border-gray-200 rounded-md">
                            <div className="px-4 border-b-1 gap-2 py-2 flex flex-col md:flex-row items-center justify-between">
                                <h1 className="text-xl font-medium">Order Summary</h1>
                            </div>
                            <div className="p-4 space-y-4">
                                <div className="flex items-center justify-between"><span>Total Price:</span> <span>Tk.{commaSeparator(totalPrice)}</span></div>
                                <div className="flex items-center justify-between"><span>Discount:</span> <span>Tk.{commaSeparator(0)}</span></div>
                                <div className="flex items-center justify-between"><span>Tax:</span> <span>Tk.{commaSeparator(0)}</span></div>
                                <Divider />
                                <div className="flex items-center text-lg font-medium justify-between"><span>Total:</span> <span>Tk.{commaSeparator(totalPrice)}</span></div>
                                <div className="flex flex-col gap-4">
                                    <Button as={Link} href="/confirm-order" size="md" radius="sm" variant="solid" className="bg-black text-white font-medium">Checkout</Button>
                                    <Button as={Link} href="/all-products" size="md" radius="sm" variant="bordered" className="text-black font-medium">Continue Shopping</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </section>
    );
}

const ItemCard = ({ item, commaSeparator, handleQuantityChange, handleRemoveItem }) => {
    return (
        <div className="flex items-center py-4 justify-between">
            <div className="flex gap-2 items-center justify-start">
                <div className="rounded-md border-1 w-24 h-24 flex items-center justify-center">
                    <Image radius="md" src={item.thumbnail} alt={item.title} className="w-full h-20 object-contain" />
                </div>
                <div className="flex flex-col items-start justify-center">
                    <div className="w-48">
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
            <div className="flex items-center justify-center gap-3">
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
                <div>
                    <h1 className="text-base font-medium text-gray-900">Tk.{commaSeparator(item.price * item.quantity)}</h1>
                    <h1 className="text-tiny font-light text-gray-500">Tk.{commaSeparator(item.price)} / per item</h1>
                </div>
            </div>
            <div>
                <Button onClick={() => handleRemoveItem(item.itemKey)} radius="sm" color="danger" variant="flat" size="md">
                    <span>Remove</span>
                </Button>
            </div>
        </div>
    );
};

export default MyCart;
