import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import UpdateFood from "../Components/UpdateFood";
import { toast } from "react-toastify";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const FoodList = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
    const navigate = useNavigate();
  // ✅ Fetch food list
  const fetchFoods = async () => {
    try {
      const response = await axios.get(
        "http://localhost/Vojon/Backend/Foodlist.php"
      );
      setFoodItems(response.data);
    } catch (error) {
      console.error("Error fetching foods:", error);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  // ❌ Delete food
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        "http://localhost/Vojon/Backend/DeleatFood.php",
        {
          data: { id },
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success("Food deleted");
      setFoodItems(foodItems.filter((item) => item.id !== id));
    } catch (error) {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="w-full">

      {/* TABLE HEADER */}
      <div className="bg-secondary rounded-t-xl px-6 py-4 grid grid-cols-[100px_1fr_1fr_100px_100px_80px_100px_50px] gap-4">
        <span>Food</span>
        <span>Name</span>
        <span>Category</span>
        <span className="text-center">Rating</span>
        <span className="text-center">Price</span>
        <span className="text-center">Off</span>
        <span></span>
        <span></span>
      </div>

      {/* TABLE BODY */}
      <div className="flex flex-col gap-3 mt-3">
        {foodItems.map((item) => (
          <div
            key={item.id}
            className="bg-white px-6 py-4 grid grid-cols-[100px_1fr_1fr_100px_100px_80px_100px_50px] gap-4 items-center rounded-xl shadow"
          >
            <img
              src={`http://localhost/Vojon/Backend/${item.image}`}
              className="w-16 h-16 object-cover rounded"
            />

            <span>{item.name}</span>
            <span>{item.category}</span>
            <span className="text-center">{item.ratings}</span>
            <span className="text-center">{item.price}</span>
            <span className="text-center">{item.discount}</span>

            {/* ✅ EDIT */}
            <button
              onClick={() => {
                setSelectedFood(item);
                setShowEdit(true);
              }}
              className="bg-orange-400 text-white px-4 py-2 rounded"
            >
              Edit
            </button>

            {/*DELETE */}
            <button
              onClick={() => handleDelete(item.id)}
              className="text-orange-400 hover:text-orange-600 flex items-center justify-center"
            >
              <RxCross2 size={22} />
            </button>
          </div>
        ))}
      </div>

      {/* ✅ EDIT MODAL */}
      {showEdit && (
        <UpdateFood
          item={selectedFood}
          onUpdate={fetchFoods}
          onClose={() => {
            setShowEdit(false);
            setSelectedFood(null);
          }}
        />
      )}
      <IoMdAdd
        className="fixed bottom-10 right-6 bg-orange-400 text-4xl text-white cursor-pointer hover:text-orange-600 shadow-lg rounded-full p-2"
        onClick={() => {navigate("/add-food")}}
      />
    </div>
  );
};

export default FoodList;
