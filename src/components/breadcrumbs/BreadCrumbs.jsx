import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { useLocation , useLoaderData } from 'react-router-dom';

const breadcrumbsData = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Blog", path: "/blog" },
  { title: "Read Blog", path: "/blog/:id" },
  { title: "Contact", path: "/contact" },
  { title: "All Products", path: "/all-products" },
  { title: "Product Details", path: "/all-products/:id", regex: /^\/all-products\/[^\/]+$/ },
  { title: "Login", path: "/login" },
  { title: "Register", path: "/register" },
  { title: "Cookies Policy", path: "/cookies-policy" },
  { title: "Company License", path: "/company-license" },
  { title: "Terms and Conditions", path: "/terms-and-conditions" },
  { title: "Privacy Policy", path: "/privacy-policy" },
  { title: "Dashboard", path: "/dashboard" },
  { title: "Add New Product", path: "/dashboard/add-new-product" },
  { title: "Manage Products", path: "/dashboard/manage-products" },
  { title: "Top Selling Products", path: "/dashboard/top-selling-products" },
  { title: "Profile", path: "/dashboard/my-profile" },
  { title: "Edit Profile", path: "/dashboard/update-my-profile" },
  { title: "Edit Product", path: "/dashboard/manage-products/update-product/:id", regex: /^\/dashboard\/manage-products\/update-product\/[^\/]+$/ },
];


const Breadcrumb = () => {
  const location = useLocation();
  const productData = useLoaderData();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <Breadcrumbs>
        {pathnames.length > 0 && <BreadcrumbItem href="/">Home</BreadcrumbItem>}
        {pathnames.map((_, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const breadcrumb = breadcrumbsData.find(b => b.path === routeTo || (b.regex && b.regex.test(routeTo))) || {};

          let title = breadcrumb.title;
          if (breadcrumb.regex && breadcrumb.regex.test(routeTo)) {
            title = productData ? productData.model : 'Loading...';
          }
          
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <BreadcrumbItem key={routeTo} href={routeTo}>{title}</BreadcrumbItem>
          ) : (
            <BreadcrumbItem key={routeTo} href={routeTo}>{title}</BreadcrumbItem>
          );
        })}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
