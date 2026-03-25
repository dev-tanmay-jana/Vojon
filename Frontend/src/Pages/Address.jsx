import React, { useState } from "react";
import { FaHome, FaBriefcase,FaUser, FaPhone } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Address = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pincode: "",
    city: "",
    state: "",
    address: "",
    landmark: "",
    type: "Home",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Address Saved Successfully ✅");
  };

  return (
    <div className="min-h-screen mt-5 bg-gray-100 flex items-center justify-center px-4 py-10">

      {/* Card */}
      <div className="w-100 max-w-2xl bg-white rounded-2xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Add Delivery Address
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Address Type */}
                <div>
                <p className="mb-2 text-gray-700 font-medium">Save As</p>

                <div className="flex gap-4">
                    {[
                    { label: "Home", icon: <FaHome /> },
                    { label: "Work", icon: <FaBriefcase /> },
                    { label: "Other", icon: <MdLocationOn /> },
                    ].map((item) => (
                    <button
                        key={item.label}
                        type="button"
                        onClick={() => setForm({ ...form, type: item.label })}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full border transition ${
                        form.type === item.label
                            ? "bg-orange-500 text-white border-orange-500"
                            : "bg-white text-gray-600 hover:border-orange-400"
                        }`}
                >
                    {item.icon}
                    {item.label}
                </button>
                ))}
            </div>
            </div>
          {/* Name + Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <FaUser className="text-gray-500" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="input "
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-gray-500" />
              <input
                type="text"
                name="phone"
                placeholder="Mobile Number"
                value={form.phone}
                onChange={handleChange}
                className="input"
                maxLength={10}
                required
              />
            </div>
          </div>

          {/* Pincode + City */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={form.pincode}
              onChange={handleChange}
              className="input"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              className="input"
              required
            />
          </div>

          {/* State */}
          <input
            type="text"
            name="state"
            placeholder="State"
            value={form.state}
            onChange={handleChange}
            className="input"
            required
          />

          {/* Address */}
          <textarea
            name="address"
            placeholder="Full Address"
            value={form.address}
            onChange={handleChange}
            className="input h-24 resize-none"
            required
          />

          {/* Landmark */}
          <input
            type="text"
            name="landmark"
            placeholder="Landmark (Optional)"
            value={form.landmark}
            onChange={handleChange}
            className="input"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition"
          >
            Save Address
          </button>

        </form>
      </div>
    </div>
  );
};

export default Address;