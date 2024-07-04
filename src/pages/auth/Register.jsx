import { Button, Card, CardBody, Checkbox, Input, Link } from "@nextui-org/react";
import { Helmet } from 'react-helmet-async';    
import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { BdFlags } from "../../assets/icons/BdFlags";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import {auth} from "../../firebase/firebase.config";

const Register = () => {
  // State to manage the visibility of the password input
  const [isVisible, setIsVisible] = useState(false);

  // Hook to create a user with email and password using Firebase Authentication
  const [createUserWithEmailAndPassword, loading] = useCreateUserWithEmailAndPassword(auth);

  // Custom hook to get an instance of Axios for making HTTP requests
  const axiosPublic = useAxiosPublic();

  // Function to toggle password visibility
  const toggleVisibility = () => setIsVisible(!isVisible);

  // Form management using react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Navigation hook for redirecting after form submission
  const navigate = useNavigate();

  // Location hook to get the 'from' pathname or default to "/"
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Function to handle form submission
  const onSubmit = async (data) => {
    // Log the form data for debugging purposes
    console.log("🚀 ~ onSubmit ~ data:", data);
    // Prepare the user data to be sent to the backend
    const userData = {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      password: data.password
    };

    try {
      // Create a user with Firebase Authentication
      const result = await createUserWithEmailAndPassword(data.email, data.password);

      if(result){
        // Log the result user information for debugging purposes
        console.log(result.user);
      try{
        // Make API call to register user using axios
        const response = await axiosPublic.post('/auth/register', userData);

        // Extract token from response
        const token = response.data.token;

        // Store token in localStorage
        localStorage.setItem('access-token', token);

         // Show a success message upon successful registration and data saving
        Swal.fire({
          icon: "success",
          title: "Account Successfully Created!",
        });

        // Redirect the user to another page (specified by the 'from' variable)
        navigate(from, { replace: true });
      }
      catch (axiosError) {
        // Log any errors that occur during the Axios request
        console.error('Axios error:', axiosError);

        // Show an error message if there is an issue with the backend request
        Swal.fire({
          icon: "error",
          title: "Backend Error",
          text: axiosError.message,
        });
      }
    }
    } catch (error) {
       // Log any errors that occur during the Firebase Authentication process
      console.error('Registration Error:', error);

      // Show an error message if there is an issue with user registration
      Swal.fire({
        icon: "error",
        title: "Registration Error",
        text: error.message || 'Something went wrong!',
      });
    }
  };
  
  return (
    <section className="">
      <Helmet title='Register now | Mayer Doa Inventory'/>
      <div className="flex items-center justify-center min-h-screen">
        <div>
          <Card className="w-[350px] shadow p-4">
            <CardBody>
              <form onSubmit={handleSubmit(onSubmit)} className="flex min-w-full flex-col mb-6 md:mb-0 gap-4">
                <div>
                  <h3 className="font-bold text-center text-2xl">SIGN UP</h3>
                </div>
                {/* Input field for Full Name */}
                <Input 
                  radius="sm" 
                  size={"md"}
                  type="text" 
                  name="fullName"
                  label="Full Name" 
                  className="w-full"
                  variant="bordered" 
                  labelPlacement="outside" 
                  placeholder="Type your Full Name" 
                  {...register("fullName", { required: "Please enter your Name"})}
                  color={errors.fullName ? "danger" : "default"}
                />
                {/* Error message for Full Name validation */}
                {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName.message}</span>}
                {/* Input field for Phone Number */}
                <Input
                  startContent={
                    <div className="border-r-2 pr-2 flex items-center justify-start gap-1"><BdFlags width="20" height="20"/> <span className="text-[14px] font-medium text-gray-600">+880</span></div>
                  }
                  radius="sm" 
                  size={"md"}
                  type="tel" 
                  name="phone"
                  label="Phone" 
                  className="w-full"
                  variant="bordered" 
                  labelPlacement="outside" 
                  placeholder="018-0000-0000" 
                  {...register("phone", { required: "Please enter your Phone", pattern: {
                    value: /^[0-9]{11}$/,
                    message: "Phone number must be at least 11 digits"
                  }})}
                  color={errors.phone ? "danger" : "default"}
                />
                {/* Error message for Phone Number validation */}
                {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
                {/* Input field for Email */}
                <Input 
                  radius="sm" 
                  size={"md"}
                  type="email" 
                  name="email"
                  label="Email" 
                  className="w-full"
                  variant="bordered" 
                  labelPlacement="outside" 
                  placeholder="Type Your Email" 
                  {...register("email", { required: "Please enter your email", pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: "Email is not valid" } })}
                  color={errors.email ? "danger" : "default"}
                />
                {/* Error message for Email validation */}
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                {/* Input field for Password */}
                <Input
                  radius="sm" 
                  size={"md"}
                  label="Password"
                  name="password"
                  labelPlacement="outside"
                  variant="bordered"
                  placeholder="Enter your password"
                  endContent={
                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                      {isVisible ? (<HiEyeOff />) : (<HiEye />)}
                    </button>
                  }
                  className="w-full"
                  type={isVisible ? "text" : "password"}
                  {...register("password", { required: "Please enter a password", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                  color={errors.password ? "danger" : "default"}
                />
                {/* Error message for Password validation */}
                {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                {/* Checkbox for accepting terms and conditions */}
                <div className="flex items-center justify-between pb-3">
                  <Checkbox color="default" size="sm" defaultChecked>Accept terms and conditions</Checkbox>
                </div>
                {/* Submit button */}
                <Button isLoading={loading} type="submit"  className="bg-gray-900 text-white shadow-lg">Register now</Button>
              </form> 
              {/* Login link */}
              <div className="flex flex-col items-center justify-center space-y-2 my-6">
                <div className="flex items-center justify-center gap-1">
                  <p className="text-[12px]">Already have an account?</p> 
                  <Link href="/login" className="font-medium" color="foreground">Login now!</Link>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Register;
