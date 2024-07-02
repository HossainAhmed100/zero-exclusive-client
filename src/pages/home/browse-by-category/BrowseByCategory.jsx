import { Link } from "react-router-dom";

// Import icons from assets folder
import CameraIcon from "../../../assets/icons/camera.png";
import PhonesIcon from "../../../assets/icons/cellPhone.png";
import ComputerIcon from "../../../assets/icons/computer.png";
import SmartWatchIcon from "../../../assets/icons/smartWatch.png";
import HeadphoneIcon from "../../../assets/icons/headphone.png";
import GamepadIcon from "../../../assets/icons/gamepad.png";


function BrowseByCategory() {
  return (
    <div className="py-6 sm:py-8 bg-white lg:py-16 px-4 md:px-8">
      {/* Category header */}
      <div className="pt-2 order-last md:-order-last w-full flex flex-col items-start justify-start gap-6">
        <div className="flex items-center justify-start gap-4">
          <div className="w-4 h-6 bg-blue-500 rounded-sm"></div>
          <h2 className="text-blue-500 font-semibold text-lg">Categories</h2>
        </div>
        <h1 className="text-3xl font-semibold">Browse By Category</h1>
      </div>
      {/* Category cards */}
      <div className="w-full py-6">
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4">
          <CategoryCard icon={PhonesIcon} title="Phones" path="/phones"/>
          <CategoryCard icon={ComputerIcon} title="Computers" path="/computers"/>
          <CategoryCard icon={SmartWatchIcon} title="SmartWatches" path="/smartwatches"/>
          <CategoryCard icon={CameraIcon} title="Cameras" path="/cameras"/>
          <CategoryCard icon={HeadphoneIcon} title="Headphones" path="/headphones"/>
          <CategoryCard icon={GamepadIcon} title="Gaming" path="/gaming"/>
        </div>
      </div>
    </div>
  )
}

// Functional component for individual category card
const CategoryCard = ({ icon, title, path }) => {
  return (
    <Link to={path}>
      <div className="rounded-sm border-1 hover:bg-gray-50 transform transition border-gray-300 py-4 px-6 flex flex-col items-center justify-center gap-2">
        <img src={icon} alt={title} className="w-14 h-14"/>
        <span className="text-base text-gray-700 font-medium">{title}</span>
      </div>
    </Link>
  )
}

export default BrowseByCategory;
