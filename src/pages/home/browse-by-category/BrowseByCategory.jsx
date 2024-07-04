import { Link } from "react-router-dom";

// Import icons from assets folder
import {Trouser, Tupi, Attar, TShirt, Jersey, Janamaz, Tasbih, Panjabi} from "../../../assets/SVGIcons/index";

function BrowseByCategory() {
  return (
    <div className="py-6 sm:py-8 bg-white lg:py-16 px-4 md:px-8">
      {/* Category header */}
      <div className="pt-2 order-last md:-order-last w-full flex flex-col items-start justify-start gap-6">
        <div className="flex items-center justify-start gap-4">
          <div className="w-4 h-6 bg-gray-500 rounded-sm"></div>
          <h2 className="text-gray-500 font-medium text-lg">Categories</h2>
        </div>
        <h1 className="text-3xl font-semibold">Browse By Category</h1>
      </div>
      {/* Category cards */}
      <div className="w-full py-6">
        <div className="grid lg:grid-cols-8 md:grid-cols-6 grid-cols-4 gap-4">
          <CategoryCard icon={<Trouser  width="50" height="50"/>} title="Trouser" path="/"/>
          <CategoryCard icon={<Jersey  width="50" height="50"/>} title="Jersey" path="/"/>
          <CategoryCard icon={<Panjabi  width="50" height="50"/>} title="Panjabi" path="/"/>
          <CategoryCard icon={<Tupi  width="50" height="50"/>} title="Tupi" path="/"/>
          <CategoryCard icon={<TShirt  width="50" height="50"/>} title="T-Shirt" path="/"/>
          <CategoryCard icon={<Attar  width="50" height="50"/>} title="Attar" path="/"/>
          <CategoryCard icon={<Janamaz  width="50" height="50"/>} title="Janamaz" path="/"/>
          <CategoryCard icon={<Tasbih  width="50" height="50"/>} title="Tasbih" path="/"/>
        </div>
      </div>
    </div>
  )
}

// Functional component for individual category card
const CategoryCard = ({ icon, title, path }) => {
  return (
    <Link to={path}>
      <div className="rounded-lg border-1 hover:bg-gray-50 transform transition border-gray-300 py-4 px-6 flex flex-col items-center justify-center gap-2">
        {icon}
        {/* <img src={icon} alt={title} className="w-14 h-14"/> */}
        <span className="text-base text-gray-700 font-medium">{title}</span>
      </div>
    </Link>
  )
}

export default BrowseByCategory;
