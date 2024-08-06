import { Helmet } from "react-helmet-async";
import { Input, Button, Select, SelectItem, Image, Textarea } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaPercent } from "react-icons/fa6";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

function EditProductPage() {
  let { productId } = useParams();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedImages, setSelectedImages] = useState([]); 
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const {data: productData, refetch} = useQuery({
    queryKey: ["productData", productId],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products/productsById/${productId}`);
      const morePhotos = res.data?.morePhotos;
      setSelectedImages([...morePhotos])
      return res.data;
    },
  })

  // Form submission handler
  const onSubmit = async (data) => {
    setLoading(true)
  const originalProduct = {
    title: data.title,
    brand: data.brand,
    category: data.category,
    price: data.price,
    discount: data.discount,
    discountType: data.discountType,
    sku: data.sku,
    quantity: data.quantity,
    description: data.description,
    rating: productData.rating,
    thumbnail: productData.thumbnail,
    morePhotos: productData.morePhotos,
  };
  await axiosSecure.put(`/products/${productId}`, originalProduct)
    .then((response) => {
      setLoading(false)
      console.log("🚀 ~ .then ~ response:", response)
      if(response.status === 200){
        toast.success('Successfully Updated!')
        refetch()
      }
    })
  };

  // Function to handle image selection
  const handleImageSelect = (event) => {
    const files = Array.from(event.target.files).filter(
      (file) => ["image/png", "image/jpg", "image/jpeg"].includes(file.type)
    );
    setSelectedImages(files);
  };

  // Function to handle image replacement
  const handleReplaceImage = (index) => (event) => {
    const file = event.target.files[0];
    if (file && ["image/png", "image/jpg", "image/jpeg"].includes(file.type)) {
      setSelectedImages((prevImages) => prevImages.map((img, i) => (i === index ? file : img)));
    }
  };

  // Function to handle image removal
  const handleRemoveImage = (index) => () => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const discountTypes = [
    { id: 1, key: "cashDiscount", label: "Cash Discount" },
    { id: 3, key: "buyOneGetOneFree", label: "Buy One Get One Free"},
    { id: 5, key: "clearanceDiscount", label: "Clearance Discount" },
    { id: 6, key: "loyaltyDiscount", label: "Loyalty Discount" },
    { id: 7, key: "holidayDiscount", label: "Holiday Discount" },
    { id: 11, key: "studentDiscount", label: "Student Discount" },
    { id: 19, key: "limitedTimeDiscount", label: "Limited Time Discount" },
    { id: 20, key: "flashSaleDiscount", label: "Flash Sale Discount" }
  ];

  const categoryList = [
    { id: "Panjabi", label: "Panjabi" },
    { id: "Tupi", label: "Tupi" },
    { id: "T-Shirt", label: "T-Shirt" },
    { id: "Janamaz", label: "Janamaz" },
    { id: "Trouser", label: "Trouser" },
    { id: "Jersey", label: "Jersey" },
    { id: "Attar", label: "Attar" },
    { id: "Tasbih", label: "Tasbih" },
  ];

  return (
    <section>
      <Helmet title='Add New Product | Admin - Dashboard | Zephyra Online Shop' />
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        
        {/* Product Image Upload Section */}
        <div className="border-1 border-gray-200 rounded-md">
          <div className="px-4 border-b-1 gap-2 py-2 flex flex-col md:flex-row items-center justify-between">
            <h1>Select Product Image</h1>
            <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-4 gap-4">

            <ImageSelectInput handleImageSelect={handleImageSelect} />

            {selectedImages.map((image, index) => (
              <SelectedImagePreview 
                key={index}
                image={image}
                onReplace={handleReplaceImage(index)}
                onRemove={handleRemoveImage(index)}
              />
            ))}
          </div>
        </div>

        {/* General Information Form Section */}
        <div className="border-1 border-gray-200 rounded-md">
        <div className="px-4 border-b-1 gap-2 py-2 flex flex-col md:flex-row items-center justify-between">
          <h1>General Information</h1>
          <p className="text-xs text-gray-500">Fill in the product details below</p>
        </div>
        <div className="p-4 space-y-4">
          <Input {...register("title", { required: true })} defaultValue={productData?.title} labelPlacement="outside" variant="faded" radius="sm" label="Product Name" placeholder="Enter product name" fullWidth />
          {errors.title && <span className="text-tiny text-red-500">This field is required</span>}
          <div className="grid grid-cols-2 gap-4">
            <div>
            <Input {...register("brand", { required: true })} defaultValue={productData?.brand} labelPlacement="outside" variant="faded" radius="sm" label="Product Brand" placeholder="Type Brnad name" fullWidth />
            {errors.brand && <span className="text-tiny text-red-500">This field is required</span>}
            </div>
            <div>
            <Select {...register("category", { required: true })} label="Product Category" labelPlacement="outside" variant="faded" radius="sm" placeholder="Select a Category" fullWidth>
              {categoryList.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.label}
                </SelectItem>
              ))}
            </Select>
            {errors.category && <span className="text-tiny text-red-500">This field is required</span>}
            </div>
          </div>
        </div>
        </div>
        
        {/* Pricing Section */}
        <div className="border-1 border-gray-200 rounded-md">
          <div className="px-4 border-b-1 gap-2 py-2 flex flex-col md:flex-row items-center justify-between">
            <h1>Pricing</h1>
            <p className="text-xs text-gray-500">Enter the product pricing details</p>
          </div>
          <div className="p-4 space-y-4">
            <Input
              type="number"
              label="Price"
              variant="faded" 
              placeholder="0.00"
              defaultValue={productData?.price}
              labelPlacement="outside"
              {...register("price", { required: true })}
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">$</span>
                </div>
              }
            />
            {errors.price && <span className="text-tiny text-red-500">This field is required</span>}
              
            <div className="grid grid-cols-2 gap-4">
              <div>
              <Input type="number" endContent={<FaPercent />} {...register("discount", { required: true })} defaultValue={productData?.discount} labelPlacement="outside" variant="faded" radius="sm" label="Discount Amount" placeholder="0.00" fullWidth />
              {errors.discount && <span className="text-tiny text-red-500">This field is required</span>}
              </div>
              <div>
              <Select {...register("discountType", { required: true })} label="Discount Type" labelPlacement="outside" variant="faded" radius="sm" placeholder="Select a Discount Type" fullWidth>
                {discountTypes.map((discount) => (
                  <SelectItem key={discount.key} value={discount.key}>
                    {discount.label}
                  </SelectItem>
                ))}
              </Select>
              {errors.discountType && <span className="text-tiny text-red-500">This field is required</span>}
              </div>
            </div>
          </div>
        </div>
        
        {/* Inventory Section */}
        <div className="border-1 border-gray-200 rounded-md">
          <div className="px-4 border-b-1 gap-2 py-2 flex flex-col md:flex-row items-center justify-between">
            <h1>Inventory</h1>
            <p className="text-xs text-gray-500">Enter the inventory details</p>
          </div>
          <div className="p-4 grid md:grid-cols-2 grid-cols-1 gap-4">
            <div>
            <Input
              type="number"
              label="Prodcut Code"
              variant="faded" 
              placeholder="12345678"
              labelPlacement="outside"
              defaultValue={productData?.sku}
              {...register("sku", { required: true })}
            />
            {errors.sku && <span className="text-tiny text-red-500">This field is required</span>}
            </div>
            <div>
            <Input
              type="number"
              label="Prodcut Stock Quantity"
              variant="faded" 
              placeholder="Type product quantity"
              labelPlacement="outside"
              defaultValue={productData?.quantity}
              {...register("quantity", { required: true })}
            />
            {errors.quantity && <span className="text-tiny text-red-500">This field is required</span>}
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="border-1 border-gray-200 rounded-md">
          <div className="px-4 border-b-1 gap-2 py-2 flex flex-col md:flex-row items-center justify-between">
            <h1>Product Description</h1>
            <p className="text-xs text-gray-500">Type product details</p>
          </div>
          <div className="p-4">
            <div>
              <Textarea
                type="description"
                label="Description"
                variant="faded" 
                placeholder="Type product quantity"
                labelPlacement="outside"
                defaultValue={productData?.description}
                {...register("description", { required: true })}
              />
              {errors.description && <span className="text-tiny text-red-500">This field is required</span>}
            </div>
          </div>
        </div>

        <Button isLoading={loading} disabled={loading} type="submit" color="primary">Add Product</Button>
        </div>
      </form>
    </section>
  );
}

// Component for product image selection input
const ImageSelectInput = ({ handleImageSelect }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
          </svg>
          <div className="mb-2 text-tiny text-gray-500">
            <p className="font-semibold">Click to upload</p>
            <p>or drag and drop</p>
          </div>
        </div>
        <input 
        id="dropzone-file" 
        accept="image/png, image/jpg, image/jpeg"
        onChange={handleImageSelect} multiple  
        type="file" className="hidden" />
      </label>
    </div>
  );
}

// Component for displaying selected image previews with replace and remove buttons
const SelectedImagePreview = ({ image, onReplace, onRemove }) => {
  // const imageUrl = URL.createObjectURL(image);
  return (
    <div className="relative overflow-hidden rounded-md flex items-center justify-center w-full group">
       <Image radius="md" src={image} alt={"Selected Prodcut Images"} className="w-full border-1 h-44 object-contain" />
      <div className="absolute rounded-md top-0 right-0 z-10 backdrop-grayscale-0 bg-gray-900/70 border-1 w-full h-full flex flex-col items-center justify-center space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button size="sm" color="primary">
          Replace
          <input type="file" className="hidden" onChange={onReplace} />
        </Button>
        <Button size="sm" color="danger" onClick={onRemove}>
          Remove
        </Button>
      </div>
    </div>
  );
};

export default EditProductPage
