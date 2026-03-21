import { FaChevronDown } from "react-icons/fa";

const orders = [
  {
    id: 1,
    mobile: "6651056132",
    total: 672,
    date: "20.01.2026",
    items: [
      { name: "Chicken Biriyani", qty: 2 },
      { name: "Chicken Chap", qty: 1 },
      { name: "Chocolate IceCream", qty: 2 },
    ],
  },
  {
    id: 2,
    mobile: "6651056132",
    total: 672,
    date: "20.01.2026",
    items: [
      { name: "Chicken Biriyani", qty: 2 },
      { name: "Chicken Chap", qty: 1 },
      { name: "Chocolate IceCream", qty: 2 },
    ],
  },
  {
    id: 3,
    mobile: "6651056132",
    total: 120,
    date: "20.01.2026",
    items: [
      { name: "Chocolate Icecream", qty: 2 },
    ],
  },
];

const Orders = () => {
  return (
    <div className="ml-8 space-y-6">
      {orders.map((order, index) => (
        <div
          key={order.id}
          className="w-full bg-[#F6F5F3] rounded-3xl border border-gray-300 p-6 flex items-center justify-between"
        >
          {/* Left Section */}
          <div className="flex gap-6">
            {/* Icon + index */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-15 rounded-lg bg-orange-400 flex items-center justify-center">
                 <span className="text-xl font-semibold mt-1">{index + 1}.</span>
                🍽️
              </div>
             
            </div>

            {/* Food list */}
            <div className="space-y-2">
              {order.items.map((item, i) => (
                <div key={i} className="flex justify-between w-50">
                  <span className="text-base">{item.name}</span>
                  <span className="font-medium">{item.qty}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Middle Section */}
          <div className="space-y-3 ml-10 text-base">
            <p>
              <span className="font-medium">Customer Mob:</span>{" "}
              {order.mobile}
            </p>
            <p>
              <span className="font-medium">Total Price:</span> ₹{order.total}
            </p>
            <p>
              <span className="font-medium">Date:</span> {order.date}
            </p>
          </div>

          {/* Right Section */}
          <select className="flex items-center gap-2 bg-orange-400 text-white px-5 py-2 rounded-lg font-medium">
            <option value="Process">Process</option>
            <option value="Delivered">Delivered</option>
            <FaChevronDown size={14} />
          </select>
        </div>
      ))}
    </div>
  );
};

export default Orders;
