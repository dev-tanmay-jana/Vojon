import { motion } from "framer-motion";
// import { Star } from "lucide-react";
import { FaRegStar } from "react-icons/fa";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";

const MenuCard = ({
    ItemId,
    image,
    name,
    originalPrice,
    discount,
    ratings,
    index,
        }) => {
    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
    // console.log(image,name,originalPrice,discount,ratings);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-card rounded-2xl p-4 shadow-card hover:shadow-elevated transition-shadow duration-300 group"
    >
      {/* Image Container */}
      <div className="relative mb-4 overflow-hidden rounded-xl">
        <img
          src={`/api/${image}`}
          alt={name}
          className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <h3 className="absolute bottom-0  right-0 text-orange-500 text-center p-1 text-xl font-bold bg-white/90 backdrop-blur-sm rounded-tl-lg">
          {discount}% OFF
        </h3>
      </div>

      {/* Content */}
      <div className="text-center">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2">
          {name}
        </h3>
    <div className="flex  items-center justify-around ">
        {/* Price */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-muted-foreground line-through text-sm">
            ₹{originalPrice}
          </span>
          <span className="text-primary font-semibold text-lg">
            ₹{Math.floor(originalPrice - (originalPrice * discount) / 100)}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <FaRegStar key={i} className={i < Math.floor(ratings) ? "text-primary" : "text-muted-foreground/30"} />
          ))}
          <span className="text-sm text-muted-foreground ml-1">
            {ratings.toFixed(1)}
          </span>
        </div>
        </div>

        {/* Order Button */}
        {!cartItems[ItemId] ?
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={()=>addToCart(ItemId)}
          className="w-full py-2.5 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
          Place Order
        </motion.button>
        :
        <div className="group w-full py-2.5 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary transition-colors flex items-center justify-around gap-4">

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-10 h-8 font-bold rounded-full flex items-center justify-center transition-colors"
                onClick={() => removeFromCart(ItemId)}
            >
                <FaMinus className="text-primary group-hover:text-white transition-colors" />
            </motion.button>

            <span className="text-lg font-medium group-hover:text-white transition-colors">
                {cartItems[ItemId]}
            </span>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-8 h-8 font-medium rounded-full flex items-center justify-center transition-colors"
                onClick={() => addToCart(ItemId)}
            >
                <FaPlus className="text-primary group-hover:text-white transition-colors" />
            </motion.button>

</div>

    }
      </div>
    </motion.div>
  );
};

export default MenuCard;
