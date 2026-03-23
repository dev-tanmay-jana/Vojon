import { motion } from "framer-motion";
import MenuCard from "./MenuCard";
import { useContext, useState } from "react";
import { StoreContext } from "../Context/StoreContext";

const MenuSection = () => {
  const { foodList } = useContext(StoreContext);

  const [visibleCount, setVisibleCount] = useState(8);

  const handleSeeMore = () => setVisibleCount((prev) => prev + 4);
  const handleShowLess = () => setVisibleCount(4);

  // Ensure foodList is always an array
  const displayedItems = Array.isArray(foodList) ? foodList.slice(0, visibleCount) : [];

  return (
    <section id="menu" className="py-5 bg-secondary/50">
      <div className="container mx-auto px-4">

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedItems.map((item, index) => (
            <MenuCard
              key={item.id}
              ItemId={item.id}
              image={item.image_url || item.image}
              name={item.name}
              originalPrice={Number(item.price)}
              discount={Number(item.discount)}
              ratings={Number(item.ratings)}
              index={index}
            />
          ))}
        </div>

        {/* See More / Show Less */}
        <motion.div className="text-center mt-10">
          {visibleCount < (foodList?.length || 0) && (
            <button
              onClick={handleSeeMore}
              className="text-primary font-medium hover:text-accent transition-colors inline-flex items-center gap-2"
            >
              See More »
            </button>
          )}

          {visibleCount > 4 && visibleCount >= (foodList?.length || 0) && (
            <button
              onClick={handleShowLess}
              className="text-primary font-medium hover:text-accent transition-colors inline-flex items-center gap-2"
            >
              Show Less «
            </button>
          )}
        </motion.div>

      </div>
    </section>
  );
};

export default MenuSection;