import { Helmet } from "react-helmet-async";
import { Button, Image } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {storage}  from "../../../firebase/firebase.config"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


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