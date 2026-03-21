import React, { useState } from "react";
import { Calendar, Clock, Users } from "lucide-react";

const ReserveTableForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    note: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Data:", form);
    alert("Table reserved successfully! 🍽️");
  };

  return (
    <div className="max-w-3xl mx-auto mt-5 p-6 bg-black/10 rounded-3xl shadow-strong items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 w-85 backdrop-blur-xl rounded-3xl shadow-strong p-8 space-y-6 justify-center">
            <label className="text-sm font-medium">Name<input 
                type="text"
                name="name"
                required
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full pl-5 pr-4 py-3 rounded-xl bg-background/20 border focus:outline-none focus:ring-2 focus:ring-primary mb-4"
                 /></label>
            <label className="text-sm font-medium">Phone<input
                type="tel"
                name="phone"
                required
                placeholder="Your Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full pl-5 pr-4 py-3 rounded-xl bg-background/20 border focus:outline-none focus:ring-2 focus:ring-primary mb-4"
                 /></label>
        {/* Date */}
        <div className="relative flex gap-2 md:gap-4 items-center justify-center">
            <label className="text-sm font-medium">Date
                <div className="relative mt-2 gap-2 items-center justify-center">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                    name="date"
                    type="date"
                    required
                    value={form.date}
                    onChange={handleChange}
                    className="pl-2 pr-2 py-3 rounded-xl bg-background/20 border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>
            </label>

            {/* Time */}
            <div>
                <label className="text-sm font-medium">Time
                    <div className="relative mt-2">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                        type="time"
                        name="time"
                        required
                        value={form.time}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-background/20 border focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>
                </label>
            </div>
        </div>
        {/* Guests */}
        <div>
          <label className="text-sm font-medium">Number of Guests</label>
          <div className="relative mt-2">
            <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <select
                name="guests"
                value={form.guests}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-background/20 border focus:outline-none focus:ring-2 focus:ring-primary"
                >
              {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
                <option key={n} value={n}
                className="bg-background/20 rounded-xl">    
                  {n} Guests
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Note */}
        <div>
          <label className="text-sm font-medium">Special Request</label>
          <textarea
            name="note"
            value={form.note}
            onChange={handleChange}
            placeholder="Any special request?"
            rows="4"
            className="w-full mt-2 p-4 rounded-xl bg-background/20 border focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-full font-semibold text-lg hover:scale-[1.02] hover:shadow-lg transition"
        >
          Confirm Reservation
        </button>
      </form>
    </div>
  );
};

export default ReserveTableForm;
