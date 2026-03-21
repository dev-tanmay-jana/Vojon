import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar.jsx";
import Header from "./Components/Header.jsx";
import Orders from "./Pages/Orders.jsx";
import FoodList from "./Pages/FoodList.jsx";
import Error from "./Pages/Error.jsx";
import AddFood from "./Pages/AddFood.jsx";
import { useState } from "react";
import { ToastContainer, Slide } from "react-toastify";
import UpdateFood from "./Components/UpdateFood.jsx";

function App() {
  const [foodItems, setFoodItems] = useState([]);

  const handleAddFood = (newFood) => {
    setFoodItems([newFood, ...foodItems]);
  };

  return (
    <>
      <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
        />
        <Header />
        <div className="flex min-h-screen bg-background">
          <Sidebar />
          <Routes>
            <Route
              path="/"
              element={<FoodList foodItems={foodItems} />} 
            />
            <Route
              path="add-food"
              element={<AddFood onAdd={handleAddFood} />} 
            />
            <Route path="updatefood/:id" element={<UpdateFood foodItems={foodItems} />} />
            <Route path="orders" element={<Orders />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
