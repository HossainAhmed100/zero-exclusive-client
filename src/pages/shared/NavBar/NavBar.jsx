import { useCallback, useEffect, useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Avatar, DropdownMenu, DropdownItem, DropdownTrigger, Dropdown, Badge, Button, DropdownSection, Link} from "@nextui-org/react";
import { useNavigate, NavLink } from "react-router-dom";
import { useSignOut, useAuthState } from "react-firebase-hooks/auth";
import { FaCartShopping } from "react-icons/fa6";
import { VscSignOut, VscFeedback } from "react-icons/vsc";
import Swal from "sweetalert2";
import {auth} from "../../../firebase/firebase.config";
import LogoImg from "../../../assets/icons/logo.png";
import "./NavBar.css";


function NavBar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scrolling down, hide the navbar
        setShow(false);
      } else {
        // if scrolling up, show the navbar
        setShow(true);
      }

      // remember the current page location for the next move
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [controlNavbar]);

  // State to track the open/close status of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Get the current authenticated user
  const [user] = useAuthState(auth);
  // Hook for navigation
  const navigate = useNavigate();
  // Hook to sign out user
  const [signOut] = useSignOut(auth);

  // Function to handle user logout
  const handleLogOut = async () => {
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
  }};
  return (
    <Navbar 
    className={`transition-transform duration-300 transform ${show ? 'translate-y-0' : '-translate-y-full'}`} isBordered onMenuOpenChange={setIsMenuOpen} 
    >
    <NavbarContent >
      {/* Mobile menu toggle button */}
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      {/* Brand logo and name */}
      <NavbarBrand>
        <Link href="/" color="foreground" className="flex items-center gap-2 justify-center">
        <img src={LogoImg} alt="Logo" width="150" />
        </Link>
      </NavbarBrand>
    </NavbarContent>

    {/* Main navigation links, hidden on small screens */}
    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
        <NavLink to="/all-products">Product</NavLink>
      </NavbarItem>
      <NavbarItem>
        <NavLink to="/blog">Blogs</NavLink>
      </NavbarItem>
      <NavbarItem>
        <NavLink to="/about">About</NavLink>
      </NavbarItem>
      <NavbarItem>
        <NavLink to="/contact">Contact</NavLink>
      </NavbarItem>
    </NavbarContent>
    {/* User-specific content */}
    {user ? 
      <NavbarContent justify="end">
        <NavbarItem className="flex">
          <Link color="foreground" href="/dashboard/myCart">
            <Badge color="default" content={0} shape="circle">
              <FaCartShopping size={30}/>
            </Badge>
          </Link>
        </NavbarItem>
        <NavbarItem className="flex">
        <Dropdown
          placement="bottom-end"
          showArrow
          radius="sm"
          classNames={{
            base: "before:bg-default-200",
            content: "p-0 border-small border-divider bg-background",
          }}
        >
          <DropdownTrigger>
            <Avatar isBordered as="button" className="transition-transform" color="default" 
              name={user?.displayName} size="sm"
              src="https://avatar.iran.liara.run/public"
            />
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Link Actions"
            disabledKeys={["profile"]}
            className="p-3"
            itemClasses={{
              base: [
                "rounded-md",
                "text-default-500",
                "transition-opacity",
                "data-[hover=true]:text-foreground",
                "data-[hover=true]:bg-default-100",
                "dark:data-[hover=true]:bg-default-50",
                "data-[selectable=true]:focus:bg-default-50",
                "data-[pressed=true]:opacity-70",
                "data-[focus-visible=true]:ring-default-500",
              ],
            }}
          >
            <DropdownSection aria-label="Profile & Actions" showDivider>
              <DropdownItem href="/dashboard" textValue="Dashboard" key="dashboard">
                Dashboard
              </DropdownItem>
              <DropdownItem href="/dashboard/my-profile" textValue="My Profile" key="my-profile">
                My Profile
              </DropdownItem>
              <DropdownItem href="/dashboard/my-orders" textValue="My Profile" key="my-orders">
                My Orders
              </DropdownItem>
            </DropdownSection>  

            <DropdownSection aria-label="Help & Feedback">
              <DropdownItem key="help_and_feedback" textValue="Help & Feedback" href="/contact"  startContent={<VscFeedback />}>
                Help & Feedback
              </DropdownItem>
              <DropdownItem 
              textValue="logout"
              onClick={handleLogOut} 
              key="logout" 
              startContent={<VscSignOut />}
              >Log Out</DropdownItem>
            </DropdownSection> 
          </DropdownMenu>
        </Dropdown>
        </NavbarItem>
      </NavbarContent> :
      <NavbarContent justify="end">
        {/* Login link, only visible on large screens */}
        <NavbarItem className="hidden lg:flex">
          <Button as={Link} color="primary" variant="light" href="/login">Login</Button>
        </NavbarItem>
        {/* Sign Up button */}
        <NavbarItem>
        <Button as={Link} color="primary" href="/signup" variant="flat">
          Sign Up
        </Button>
        </NavbarItem>
      </NavbarContent> 
    }
    {/* Mobile menu items */}
    <NavbarMenu>
        <NavbarMenuItem>
          <Link color="foreground" href="/">Home</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
        <Link color="foreground" href="/all-products">Product</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
        <Link color="foreground" href="/about">About</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
        <Link color="foreground" href="/contact">Contact</Link>
        </NavbarMenuItem>
    </NavbarMenu>
    </Navbar>
  );
}

export default NavBar
