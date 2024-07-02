import { Helmet } from "react-helmet-async";
import { Input, Button, Textarea, Select, SelectItem } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { IoIosAddCircle } from "react-icons/io";
import { useLoaderData } from "react-router-dom";

function EditProductPage() {
    const {register,handleSubmit,formState: { errors }} = useForm();
    const shoe = useLoaderData();
    const axiosPublic = useAxiosPublic();
    const onSubmit = async (data) => {
        const newId = shoe.id;
        const product = {
        id: newId,
        ratings: 0,
        title: data.productName,
        brand: data.productBrand,
        price: data.productPrice,
        image_url: data.productImgUrl,
        description: data.productDescription
        };
        Swal.fire({
            title: "Are you sure?",
            text: "You want to Update this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Update"
          }).then(async (result) => {
            if (result.isConfirmed) {
        const productRes = await axiosPublic.patch(`/products/${shoe?.id}`, product);
          console.log(productRes.data)
          if(productRes.data.price){
            Swal.fire({
              icon: "success",
              title: `${data.productName} is Updated Successfully.`,
              showConfirmButton: false,
              timer: 1500
            });
          }}
          });
    };
    const brandNameList = [
      {label: "Nike", value: "Nike"},
      {label: "Puma", value: "Puma"},
      {label: "Adidas", value: "Adidas"},
      {label: "Reebok", value: "Reebok"},
      {label: "Converse", value: "Converse"},
    ]
  const product = {name: "Macbook Pro Update now"}
  return (
    <section className="lg:mx-16 md:mx-8 mx-4">
      <Helmet title={`${product?.name} | Update | Admin - Dashbaord | Zephyra Online Shop`}/>
      <div className="bg-gray-100 rounded-lg p-12">
        <div className="w-ful items-center pb-4">
            <h1 className="text-gray-800 font-semibold text-2xl">ADD NEW PRODUCT</h1>
        </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start justify-start gap-6">
         <Input 
            isRequired
            radius="sm" 
            type="text" 
            name="productName"
            label="Product name" 
            className="w-full"
            variant="bordered" 
            labelPlacement="outside" 
            placeholder="Recipe name"
            defaultValue={shoe?.title} 
            classNames={{inputWrapper: ["bg-white"]}}
            {...register("productName", { required: true })}
            isInvalid={errors.productName ? true : false}
            color={errors.productName ? "danger" : "default"}
            errorMessage={errors.productName && "Product name Please!"}
          />
         <Input 
            isRequired
            radius="sm" 
            type="text" 
            name="productImgUrl"
            label="Product Image Url" 
            className="w-full"
            variant="bordered" 
            labelPlacement="outside" 
            placeholder="Image Url"
            defaultValue={shoe?.image_url}
            classNames={{inputWrapper: ["bg-white"]}}
            {...register("productImgUrl", { required: true })}
            isInvalid={errors.productImgUrl ? true : false}
            color={errors.productImgUrl ? "danger" : "default"}
            errorMessage={errors.productImgUrl && "Please Giv e Product img url"}
          />
         <div className="flex items-center lg:justify-between w-full gap-4">
          <Select isRequired {...register("productBrand", { required: true })}
            size="md"
            radius="sm"
            variant="bordered" 
            labelPlacement="outside" 
            classNames={{ trigger: "bg-white",}}
            placeholder="Select Product Brand"
            defaultSelectedKeys={[shoe?.brand]}
            isInvalid={errors.productBrand ? true : false}
            color={errors.productBrand ? "danger" : "default"}
            errorMessage={errors.productBrand && "Please Select Product Brand"}
            label="Product Brand">
            {brandNameList.map((brand) => (
              <SelectItem key={brand.value} value={brand.value}>
                {brand.label}
              </SelectItem>
            ))}
          </Select>
         <Input 
            isRequired
            radius="sm" 
            type="number" 
            name="productPrice"
            label="Poduct Price" 
            className="w-full"
            variant="bordered" 
            labelPlacement="outside" 
            placeholder="0" 
            defaultValue={shoe?.price}
            {...register("productPrice", { required: true })}
            classNames={{inputWrapper: ["bg-white"]}}
            isInvalid={errors.productPrice ? true : false}
            color={errors.productPrice ? "danger" : "default"}
            errorMessage={errors.productPrice && "Enter Product Price"}
          />
         </div>
          <Textarea
            isRequired
            label="Product Description"
            labelPlacement="outside"
            placeholder="Write somthing about product..."
            className="w-full"
            variant="bordered"
            defaultValue={shoe?.description}
            {...register("productDescription", { required: true })}
            classNames={{inputWrapper: ["bg-white"]}}
            isInvalid={errors.productDescription ? true : false}
            color={errors.productDescription ? "danger" : "default"}
            errorMessage={errors.productDescription && "Write Product Description."}
          />
          <Button endContent={<IoIosAddCircle size={20}/>} 
          radius="sm" type="submit" 
          className="bg-gray-700 text-white">
            Update Product
          </Button>
         </form>
      </div>
    </section>
  )
}


export default EditProductPage
