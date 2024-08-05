import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ErrorPage from "../pages/error/ErrorPage";
import AllProductsPage from "../pages/products/AllProductsPage";
import ProductDetailsPage from "../pages/product-details-page/ProductDetailsPage";
import PrivateRoutes from "./PrivateRoutes";
import DashboardLayout from "../layout/DashboardLayout";
import AddProductPage from "../pages/admin/add-product/AddProductPage";
import ManageProductsPage from "../pages/admin/manage-product/ManageProductsPage";
import EditProductPage from "../pages/admin/edit-product/EditProductPage";
import CookiesPolicyPage from "../pages/policy/CookiesPolicyPage";
import TermsAndConditionsPage from "../pages/policy/TermsAndConditionsPage";
import PrivacyPolicyPage from "../pages/policy/PrivacyPolicyPage";
import CompanyLicensePage from "../pages/policy/CompanyLicensePage";
import AdminDashboardPage from "../pages/admin/admin-dashboard/AdminDashboardPage";
import EditProfilePage from "../pages/admin/profile/EditProfilePage";
import TopSellingProductsPage from "../pages/admin/top-selling-products/TopSellingProductsPage";
import MyCart from "../pages/myCart/MyCart";
import ConfirmOrder from "../pages/confirm-order/ConfirmOrder";
import fetchWithHeaders from "../utils/fetchWithHeaders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/my-cart", element: <MyCart /> },
      { path: "/confirm-order", element: <ConfirmOrder /> },
      { path: "/all-products", element: <AllProductsPage /> },
      {
        path: "/all-products/:productId",
        element: <ProductDetailsPage />,
        loader: ({ params }) => fetch(`http://localhost:5000/api/products/productsById/${params.productId}`),
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/cookies-policy", element: <CookiesPolicyPage /> },
      { path: "/company-license", element: <CompanyLicensePage /> },
      { path: "/terms-and-conditions", element: <TermsAndConditionsPage /> },
      { path: "/privacy-policy", element: <PrivacyPolicyPage /> },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoutes><DashboardLayout /></PrivateRoutes>,
    children: [
      { path: "", element: <AdminDashboardPage /> },
      { path: "add-new-product", element: <AddProductPage /> },
      { path: "manage-products", element: <ManageProductsPage /> },
      { path: "top-selling-products", element: <TopSellingProductsPage /> },
      { 
        path: "my-profile/:email", 
        element: <EditProfilePage />,
        loader: ({ params }) => fetchWithHeaders(`http://localhost:5000/api/users/${params.email}`),
      },
      {
        path: "manage-products/update-product/:id",
        element: <EditProductPage />,
        loader: ({ params }) => fetchWithHeaders(`http://localhost:5000/api/products/productsById/${params.id}`),
      },
    ],
  },
]);

export default router;
