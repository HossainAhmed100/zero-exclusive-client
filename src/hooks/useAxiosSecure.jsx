import axios from "axios";
import { useEffect } from "react"; // Import useEffect
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000/api"
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();
    
    useEffect(() => {
        // request interceptor to add authorization header for every secure call to the api
        axiosSecure.interceptors.request.use(function(config){
            const token = localStorage.getItem("access-token");
            config.headers.authorization = `Bearer ${token}`;
            return config;
        }, function(err){
            return Promise.reject(err)
        });

        // intercepts 401 and 403 status
        axiosSecure.interceptors.response.use(function(response){
            return response;
        }, async (error) => {
            const status = error.response.status;
            console.log("🚀 ~ axiosSecure.interceptors.response.use ~ status:", status);
            if(status === 401 || status === 403){
                await logOut();
                navigate("/login");
            }
            return Promise.reject(error);
        });

        // Cleanup function
        return () => {
            axiosSecure.interceptors.request.eject();
            axiosSecure.interceptors.response.eject();
        };
    }, [navigate, logOut]); // Add navigate and logOut to dependency array

    return axiosSecure;
}

export default useAxiosSecure;
