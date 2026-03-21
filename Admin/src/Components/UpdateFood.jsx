import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateFood = ({ item: propItem, onUpdate, onClose, foodItems }) => {
  const params = useParams();
  const navigate = useNavigate();
  const idFromParam = params?.id;
  const item = propItem || (foodItems ? foodItems.find((f) => String(f.id) === String(idFromParam)) : null);
  const [formData, setFormData] = useState({
    name: "",
    category: "Salad",
    ratings: "",
    price: "",
    discount: "",
  });

  const [image, setImage] = useState(null);

  useEffect(() => {
    if (item) {
      setFormData({
        name: item.name || "",
        category: item.category || "Salad",
        ratings: item.ratings || "",
        price: item.price || "",
        discount: item.discount || "",
      });
    }
  }, [item]);

  if (!item) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("id", item.id);
    Object.entries(formData).forEach(([key, value]) =>
      data.append(key, value)
    );
    if (image) data.append("image", image);

    await axios.post(
      "http://localhost/Vojon/Backend/UpdateFood.php",
      data
    );

    onUpdate && onUpdate();
    if (onClose) onClose();
    else navigate(-1);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
<h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-orange-600 via-red-400 to-yellow-300 bg-clip-text text-transparent">
  Edit Food
</h2>

        <form onSubmit={handleSubmit} className="space-y-3 ">

          <img
            src={
              image
                ? URL.createObjectURL(image)
                : `http://localhost/Vojon/Backend/${item.image}`
            }
            className="w-24 h-24 object-cover rounded"
          />

          <input type="file" onChange={(e) => setImage(e.target.files[0])} />

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-2 py-1 rounded-xl"
            placeholder="Name"
          />

        <div className="flex gap-2">
              <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border px-2 py-1 rounded-xl"
            >
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Desert">Desert</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cake">Cake</option>
                <option value="NonVeg">NonVeg</option>
                <option value="Pure veg">Pure veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
                <option value="Thali">Thali</option>
          </select>

          <input
            type="number"
            step="0.1"
            name="ratings"
            value={formData.ratings}
            onChange={handleChange}
            className="w-full border rounded-xl px-2 py-1"
            placeholder="Ratings"
          />
        </div>

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border rounded-xl px-2 py-1"
            placeholder="Price"
          />

          <input
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            className="w-full border rounded-xl px-2 py-1"
            placeholder="Discount"
          />

          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 rounded-2xl px-4 py-1 rounded"
            >
              Cancel
            </button>
            <button className="bg-green-600 text-white px-4 py-1 rounded">
              Save
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default UpdateFood;
