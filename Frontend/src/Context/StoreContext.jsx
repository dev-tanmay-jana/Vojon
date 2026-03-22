import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [foodList, setFoodList] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // Fetch food items
  const fetchFoodItems = async () => {
    try {
      const response = await axios.get(
        "https://vojon.42web.io/Backend/Foodlist.php"
      );
      setFoodList(response.data);
    } catch (error) {
      console.error("Error fetching foods:", error);
    }
  };

//   Add to cart function
  const addToCart = (itemId) => {
    if(!cartItems[itemId]){
        // console.log("Adding new item to cart:", itemId);
            setCartItems((prev)=>({
                ...prev,[itemId]:1
            }))
        }
        else{
            setCartItems((prev)=>({
                ...prev,[itemId]:prev[itemId]+1
            }))
        }
  };
//   Remove from cart function
  const removeFromCart = (itemId) => {
    setCartItems((prev)=>({
                ...prev,[itemId]:prev[itemId]-1
            }));
  };

  // Auto fetch on app load
  useEffect(() => {
    fetchFoodItems();
  }, []);

  const contextValue = {
    foodList,
    fetchFoodItems,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
