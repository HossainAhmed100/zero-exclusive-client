import { Avatar, Button, NextUIProvider, Link} from "@nextui-org/react";
import { useNavigate, Outlet, NavLink } from "react-router-dom";
import { useSignOut, useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import {auth} from "../firebase/firebase.config";
import ThreeLineIcon from "../assets/SVGIcons/ThreeLineIcon";
import { useState } from "react";
import { FaChartPie, FaArrowRightFromBracket } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdAddBusiness, MdOutlineManageSearch } from "react-icons/md";
import LogoImg from "../assets/icons/logo.png";
import { FiPackage } from "react-icons/fi";

function DashboardLayout() {
  // State to track the open/close status of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Get the current authenticated user
  const [user] = useAuthState(auth);
  // Hook for navigation
  const navigate = useNavigate();
  // Hook to sign out user
  const [signOut] = useSignOut(auth);
  
  return (
    <div>
      <NextUIProvider navigate={navigate}>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100">
                  <span className="sr-only">Open sidebar</span>
                  <ThreeLineIcon />
              </button>
              <Link href="/" color="foreground" className="flex items-center gap-2 justify-center">
                <img src={LogoImg} alt="Logo" width="150" />
              </Link>
            </div>
            <div className="flex items-center">
              <Avatar isBordered as="button" className="transition-transform" color="default" 
                name={user?.displayName} size="sm"
                src="https://avatar.iran.liara.run/public"
              /> 
            </div>
          </div>
        </div>
      </nav>

      <aside id="logo-sidebar" className={`fixed flex flex-col top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${!isMenuOpen && "-translate-x-full"} lg:translate-x-0 bg-white border-r border-gray-200`} aria-label="Sidebar">
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
          <div>
            <ul className="space-y-2 font-medium">
              <li>
              <NavLink
                to="/dashboard"
                className={({isActive}) => 
                  `flex items-center p-2 text-gray-900 rounded-lg ${isActive ? 'bg-gray-100' : 'bg-transparent'}  hover:bg-gray-100 group`
                } end>
                {({ isActive }) => (
                  <>
                  <FaChartPie color={isActive ? "#363636" : "#6b7280"} size={20}/>
                  <span className={`flex-1 ms-3 ${isActive ? "#363636" : "#6b7280"} whitespace-nowrap`}>Dashboard</span>
                  </>
                )}
              </NavLink>
              </li>
              <li>
              <NavLink
                to="all-orders"
                className={({isActive}) => 
                  `flex items-center p-2 text-gray-900 rounded-lg ${isActive ? 'bg-gray-100' : 'bg-transparent'}  hover:bg-gray-100 group`
                } end>
                {({ isActive }) => (
                  <>
                  <FiPackage color={isActive ? "#363636" : "#6b7280"} size={20}/>
                  <span className={`flex-1 ms-3 ${isActive ? "#363636" : "#6b7280"} whitespace-nowrap`}>All Orders</span>
                  </>
                )}
              </NavLink>
              </li>
              <li>
              <NavLink
                to="my-orders"
                className={({isActive}) => 
                  `flex items-center p-2 text-gray-900 rounded-lg ${isActive ? 'bg-gray-100' : 'bg-transparent'}  hover:bg-gray-100 group`
                } end>
                {({ isActive }) => (
                  <>
                  <FiPackage color={isActive ? "#363636" : "#6b7280"} size={20}/>
                  <span className={`flex-1 ms-3 ${isActive ? "#363636" : "#6b7280"} whitespace-nowrap`}>My Orders</span>
                  </>
                )}
              </NavLink>
              </li>
              <li>
              <NavLink
                to="manage-products"
                className={({isActive}) => 
                  `flex items-center p-2 text-gray-900 rounded-lg ${isActive ? 'bg-gray-100' : 'bg-transparent'}  hover:bg-gray-100 group`
                } end>
                {({ isActive }) => (
                  <>
                  <MdOutlineManageSearch color={isActive ? "#363636" : "#6b7280"} size={26}/>
                  <span className={`flex-1 ms-3 ${isActive ? "#363636" : "#6b7280"} whitespace-nowrap`}>Manage Product</span>
                  </>
                )}
              </NavLink>
              </li>
              <li>
              <NavLink
                to="add-new-product"
                className={({isActive}) => 
                  `flex items-center p-2 text-gray-900 rounded-lg ${isActive ? 'bg-gray-100' : 'bg-transparent'}  hover:bg-gray-100 group`
                } end>
                {({ isActive }) => (
                  <>
                  <MdAddBusiness color={isActive ? "#363636" : "#6b7280"} size={24}/>
                  <span className={`flex-1 ms-3 ${isActive ? "#363636" : "#6b7280"} whitespace-nowrap`}>Add New Product</span>
                  </>
                )}
              </NavLink>
              </li>
              <li>
              <NavLink
                to={`my-profile/${user?.email}`}
                className={({isActive}) => 
                    `flex items-center p-2 text-gray-900 rounded-lg ${isActive ? 'bg-gray-100' : 'bg-transparent'}  hover:bg-gray-100 group`
                  } end>
                {({ isActive }) => (
                  <>
                  <FaUser color={isActive ? "#363636" : "#6b7280"} size={18}/>
                  <span className={`flex-1 ms-3 ${isActive ? "#363636" : "#6b7280"} whitespace-nowrap`}>My Account</span>
                  </>
                )}
              </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-auto p-4 flex flex-col">
        <Button size="sm" onClick={async () => {
            const success = await signOut();
            if (success) {
              navigate("/login")
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Logout Successfull",
                  showConfirmButton: false,
                  timer: 1500
                });
            }
          }}  
          className="bg-gray-900 text-white shadow-lg" 
          startContent={<FaArrowRightFromBracket />}>
          Sign Out
        </Button> 
        </div>
      </aside>
          
      <div className="p-4 lg:ml-64">
        <div className="p-4 mt-14">
            <Outlet></Outlet>
        </div>
      </div>
      </NextUIProvider>
    </div>
  )
}

export default DashboardLayout
