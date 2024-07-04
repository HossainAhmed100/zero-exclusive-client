import { Helmet } from "react-helmet-async";
import { Input, Button, Select, SelectItem, Image, Textarea } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {storage}  from "../../../firebase/firebase.config"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { FaPercent } from "react-icons/fa6";

function AddProductPage() {
  // Destructure useForm hook to handle form state and validation
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [selectedImages, setSelectedImages] = useState([]);
  console.log("🚀 ~ AddProductPage ~ selectedImages:", selectedImages)
  const [uploadProgress, setUploadProgress] = useState({});

  
  const handleImageUpload = () => {
    selectedImages.forEach((image, index) => {
      const storageRef = ref(storage, `images/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress((prev) => ({ ...prev, [index]: progress }));
        },
        (error) => {
          console.error("Upload failed:", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
          });
        }
      );
    });
  };

  // Handle form submission
  const onSubmit = async (data) => {
    handleImageUpload()
    console.log(data);
    // Add code here to handle the form data, such as sending it to the server
  };

  const handleImageSelect = (event) => {
    const files = Array.from(event.target.files).filter(
      (file) => file.type === "image/png" || file.type === "image/jpg" || file.type === "image/jpeg"
    );
    setSelectedImages(files);
  };

  const handleRemoveImage = (index) => () => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleReplaceImage = (index) => (event) => {
    const file = event.target.files[0];
    if (file && (file.type === "image/png" || file.type === "image/jpg" || file.type === "image/jpeg")) {
      setSelectedImages((prevImages) => prevImages.map((img, i) => (i === index ? file : img)));
    }
  };

  const brandNameList = [
    { label: "Nike", value: "Nike" },
    { label: "Puma", value: "Puma" },
    { label: "Adidas", value: "Adidas" },
    { label: "Reebok", value: "Reebok" },
    { label: "Converse", value: "Converse" },
  ];

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
    { id: 100001, label: "Panjabi" },
    { id: 100002, label: "Tupi" },
    { id: 100003, label: "T-Shirt" },
    { id: 100004, label: "Janamaz" },
    { id: 100005, label: "Trouser" },
    { id: 100006, label: "Jersey" },
    { id: 100007, label: "Attar" },
    { id: 100008, label: "Tasbih" },
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
                progress={uploadProgress[index]}
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
          <Input {...register("productName", { required: true })} labelPlacement="outside" variant="faded" radius="sm" label="Product Name" placeholder="Enter product name" fullWidth />
          {errors.productName && <span className="text-tiny text-red-500">This field is required</span>}
          <div className="grid grid-cols-2 gap-4">
            <div>
            <Select {...register("brand", { required: true })} label="Brand" labelPlacement="outside" variant="faded" radius="sm" placeholder="Select a brand" fullWidth>
              {brandNameList.map((brand) => (
                <SelectItem key={brand.value} value={brand.value}>
                  {brand.label}
                </SelectItem>
              ))}
            </Select>
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
              labelPlacement="outside"
              {...register("productPrice", { required: true })}
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">$</span>
                </div>
              }
            />
            {errors.productPrice && <span className="text-tiny text-red-500">This field is required</span>}
              
            <div className="grid grid-cols-2 gap-4">
              <div>
              <Input type="number" endContent={<FaPercent />} {...register("discountPercentage", { required: true })} labelPlacement="outside" variant="faded" radius="sm" label="Discount Percentage" placeholder="0.00" fullWidth />
              {errors.discountPercentage && <span className="text-tiny text-red-500">This field is required</span>}
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
          <div className="p-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            <div>
            <Input
              type="number"
              label="SKU"
              variant="faded" 
              placeholder="12345678"
              labelPlacement="outside"
              {...register("sku", { required: true })}
            />
            {errors.sku && <span className="text-tiny text-red-500">This field is required</span>}
            </div>
            <div>
            <Input
              type="number"
              label="Barcode"
              variant="faded" 
              placeholder="0943424547"
              labelPlacement="outside"
              {...register("barcode", { required: true })}
            />
            {errors.barcode && <span className="text-tiny text-red-500">This field is required</span>}
            </div>
            <div>
            <Input
              type="number"
              label="Quantity"
              variant="faded" 
              placeholder="Type product quantity"
              labelPlacement="outside"
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
                {...register("description", { required: true })}
              />
              {errors.description && <span className="text-tiny text-red-500">This field is required</span>}
            </div>
          </div>
        </div>

        <Button type="submit" color="primary">Add Product</Button>
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
const SelectedImagePreview = ({ image, progress, onReplace, onRemove }) => {
  const imageUrl = URL.createObjectURL(image);
  return (
    <div className="relative overflow-hidden rounded-md flex items-center justify-center w-full group">
       <Image radius="md" src={imageUrl} alt={image.name} className="w-full border-1 h-44 object-contain" />
      {progress != null && (
        <div className="absolute z-20 bottom-0 left-0 right-0 bg-gray-700 bg-opacity-75 text-white text-xs text-center">
          {`Upload Progress: ${Math.round(progress)}%`}
        </div>
      )}
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

export default AddProductPage;