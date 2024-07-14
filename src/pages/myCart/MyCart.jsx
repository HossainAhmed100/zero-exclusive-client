import { Image } from "@nextui-org/react"

const products = [
    {
        thumbnail: "https://firebasestorage.googleapis.com/v0/b/zephyra-e-commerce.appspot.com/o/image%2Fimage-1720978509428?alt=media&token=3407ce5a-a6fc-4df4-8c1e-5d14b9d2dd2c",
        quantity: 1,
        title: "Masjid Comfort Jaynamaz for Prayer- Metallic Blue",
        size: "Small",
        price: 1000,
        color: "black",
        productId: "13245432154"
    },
    {
        thumbnail: "https://firebasestorage.googleapis.com/v0/b/zephyra-e-commerce.appspot.com/o/image%2Fimage-1720978509428?alt=media&token=3407ce5a-a6fc-4df4-8c1e-5d14b9d2dd2c",
        quantity: 1,
        title: "Masjid Comfort Jaynamaz for Prayer- Metallic Blue",
        size: "Small",
        price: 1000,
        color: "black",
        productId: "134538432154"
    },
    {
        thumbnail: "https://firebasestorage.googleapis.com/v0/b/zephyra-e-commerce.appspot.com/o/image%2Fimage-1720978509428?alt=media&token=3407ce5a-a6fc-4df4-8c1e-5d14b9d2dd2c",
        quantity: 1,
        title: "Masjid Comfort Jaynamaz for Prayer- Metallic Blue",
        size: "Small",
        price: 1000,
        color: "black",
        productId: "132455342154"
    },
]

function MyCart() {
  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <div className="py-16 px-4">
            <div className="flex gap-4 items-center justify-normal">
                <div className="border-1 flex-1 bg-white border-gray-200 rounded-md">
                    <div className="px-4 border-b-1 gap-2 py-2 flex flex-col md:flex-row items-center justify-between">
                        <h1 className="text-xl font-medium">Shopping Cart</h1>
                    </div>
                    <div className="p-4 space-y-4">
                    {products.map(item => <ItemCard key={item.productId} item={item}/>)}
                    </div>
                </div>
                <div className="border-1 min-w-96 bg-white border-gray-200 rounded-md">
                    <div className="px-4 border-b-1 gap-2 py-2 flex flex-col md:flex-row items-center justify-between">
                        <h1 className="text-xl font-medium">Shopping Cart</h1>
                    </div>
                    <div className="p-4 space-y-4">
                        
                    </div>
                </div>
            </div>
        </div>  
      </div>
    </section>
  )
}

const ItemCard = ({item}) => {
  return(
    <div>
        <div className="flex gap-2 items-center justify-start">
            <div className="rounded-md border-1">
            <Image radius="md" src={item?.thumbnail} alt={item?.title} className="w-full border-1 h-20 object-contain" />
            </div>
            <div className="flex flex-col items-start justify-center">
               <div className="w-48">
                   <h1 className="text-base text-ellipsis line-clamp-2 font-normal text-gray-700">{item?.title}</h1>
               </div>
               <div><span className="text-tiny text-gray-400">Color: {item?.color} Sizes: {item?.sizes}</span></div>
            </div>
        </div>
        <div></div>
        <div></div>
    </div>
  )
}

export default MyCart