import React, { useState } from "react";
import { FaImage } from "react-icons/fa6";
import axios from "axios";
import { toast } from "react-toastify";

const AddFood = ({ onAdd }) => {
    const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({

    name: "",
    category: "",
    ratings: "",
    price: "",
    discount: "",
  });

  const handleChange = async(e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    onAdd({
      id: Date.now(),
      ...formData,
      ratings: parseFloat(formData.ratings),
      price: parseInt(formData.price),
    });
    console.log("New Food Added:", formData);

    
  const data = new FormData();
  data.append("name", formData.name);
  data.append("category", formData.category);
  data.append("ratings", formData.ratings);
  data.append("price", formData.price);
  data.append("discount", formData.discount);

  if (image) {
    data.append("image", image);
  }

  try {
    const response = await axios.post(
      "http://localhost/Vojon/Backend/AddFood.php",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    toast.success("Food item added successfully!");
    console.log("Server response:", response.data);

  } catch (error) {
    console.error("Upload error:", error);
    toast.error("Failed to add food item.");
  }

    // reset fields
    setFormData({
      name: "",
      category: "",
      ratings: "",
      price: "",
      discount: "",
    });
    setImage(null);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4">Add New Food</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Image URL */}
        <label className="block text-sm font-medium">
         {/* set ternary operator to show image preview if image is selected else show icon   */}
        {image ? (
          <img src={URL.createObjectURL(image)} alt="Preview" className=" mt-3 ml-3 w-30 h-30 object-cover rounded" />
        ) : (
          <FaImage className=" mt-3 ml-3 text-black-800 w-30 h-30" />
        )}
        <input
          type="file"
          name="image"
          value={formData.image}
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full px-3 py-2 border rounded"
          required
          hidden
        />
        </label>
        {/* Food Name */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Food Name"
          className="w-full px-3 py-2 border rounded"
          required
        />
        <div
        className="grid grid-cols-2 gap-4">
            {/* Category */}
            <label
            className="block text-sm font-medium">
                    Category
                    <select onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    name='category'>
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Desert">Desert</option>
                        <option value="sandwich">sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="NonVeg">NonVeg</option>
                        <option value="Pure vage">Pure vage</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                        <option value="Thali">Thali</option>
                        <option value="Burger">Burger</option>
                        <option value="Pizza">Pizza</option>
                        <option value="Beverage">Beverage</option>
                        <option value='Liquor'>Liquor</option>
                    </select>
                </label>

            {/* Ratings */}
            <label className="block text-sm font-medium">
              Ratings
            
            <input
            type="number"
            step="0.1"
            name="ratings"
            value={formData.ratings}
            onChange={handleChange}
            placeholder="Ratings"
            className="w-full  px-5 py-2 border rounded"
            required
            />
            </label>
        </div>
        {/* Price */}
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full px-3 py-2 border rounded"
          required
        />

        {/* Discount */}
        <input
          type="text"
          name="discount"
          value={formData.discount}
          onChange={handleChange}
          placeholder="Discount"
          className="w-full px-3 py-2 border rounded"
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition"
        >
          Add Food
        </button>

      </form>
    </div>
  );
};

export default AddFood;
