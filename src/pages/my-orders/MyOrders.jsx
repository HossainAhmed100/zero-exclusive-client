import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";


function MyOrders() {
  const [user] = useAuthState(auth);
  const axiosSecure = useAxiosSecure();
  const {data: myOrders = []} = useQuery({
    queryKey: ["productData", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/orders/${user?.email}`);
      return res.data;
    },
  })
  console.log("🚀 ~ MyOrders ~ myOrders:", myOrders)
  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-4">
        {myOrders.map((item) => <Order key={item._id} order={item} />)}
        
      </div>
    </div>
  )
}

const Order = ({ order }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Order Details</h2>
      <div className="bg-white shadow-md rounded p-4 mb-6">
        <p className="text-lg"><strong>Full Name:</strong> {order.fullName}</p>
        <p className="text-lg"><strong>Phone:</strong> {order.phone}</p>
        <p className="text-lg"><strong>Email:</strong> {order.email}</p>
        <p className="text-lg"><strong>Address:</strong> {order.address}</p>
      </div>
      <h3 className="text-xl font-semibold mb-4">Cart Items</h3>
      <div className="space-y-4">
        {order.myCart.map(item => (
          <div key={item._id} className="flex items-start bg-white shadow-md rounded p-4">
            <img src={item.thumbnail} alt={item.title} className="w-24 h-24 object-cover rounded mr-4" />
            <div className="flex flex-col space-y-2">
              <p className="text-lg"><strong>Title:</strong> {item.title}</p>
              <p className="text-lg"><strong>Brand:</strong> {item.brand}</p>
              <p className="text-lg"><strong>Category:</strong> {item.category}</p>
              <p className="text-lg"><strong>Price:</strong> ${item.price}</p>
              <p className="text-lg"><strong>SKU:</strong> {item.sku}</p>
              <p className="text-lg"><strong>Quantity:</strong> {item.quantity}</p>
              <p className="text-lg"><strong>Color:</strong> {item.attributes.color}</p>
              <p className="text-lg"><strong>Size:</strong> {item.attributes.size}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders