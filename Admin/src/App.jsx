import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar.jsx";
import Header from "./Components/Header.jsx";
import Orders from "./Pages/Orders.jsx";
import FoodList from "./Pages/FoodList.jsx";
import Error from "./Pages/Error.jsx";
import AddFood from "./Pages/AddFood.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import { useState } from "react";
import { ToastContainer, Slide } from "react-toastify";
import UpdateFood from "./Components/UpdateFood.jsx";

const AdminAppContent = ({ foodItems, handleAddFood }) => {
  const location = useLocation();
  const hideLayout = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
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
      {!hideLayout && <Header />}
      <div className={`flex min-h-screen ${!hideLayout ? 'bg-background' : ''}`}>
        {!hideLayout && <Sidebar />}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
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
    </>
  );
};

function App() {
  const [foodItems, setFoodItems] = useState([]);

  const handleAddFood = (newFood) => {
    setFoodItems([newFood, ...foodItems]);
  };

  return (
    <BrowserRouter>
      <AdminAppContent foodItems={foodItems} handleAddFood={handleAddFood} />
    </BrowserRouter>
  );
}

export default App;
