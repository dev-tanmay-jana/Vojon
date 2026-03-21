import { motion } from "framer-motion";
// import { Facebook, Instagram } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const ChefCard = ({
  image,
  name,
  rating,
  experience,
  dishes,
  customers,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 text-center group"
    >
      {/* Rating Badge */}
      <div className="flex justify-center mb-4">
        <div className="bg-secondary px-4 py-2 rounded-full flex items-center gap-2">
          <span className="text-2xl font-bold text-foreground">{rating}</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-xs ${
                  i < Math.floor(rating) ? "text-primary" : "text-muted-foreground/30"
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Chef Image */}
      <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-secondary group-hover:border-primary transition-colors">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <h3 className="font-display text-xl font-semibold text-foreground mb-4">
        {name}
      </h3>

      {/* Stats */}
      <div className="flex justify-center gap-6 mb-4 text-sm">
        <div>
          <p className="text-2xl font-bold text-foreground">{experience}+</p>
          <p className="text-muted-foreground">Years Experience</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-foreground">{dishes}+</p>
          <p className="text-muted-foreground">Total Dishes</p>
        </div>
      </div>

      {/* Customers */}
      <p className="text-muted-foreground text-sm mb-4">
        <span className="font-bold text-foreground">{customers}+</span> Customer Served
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-3 mb-6">
        <a
          href="#"
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
        >
          <FaFacebook size={18} />
        </a>
        <a
          href="#"
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
        >
          <FaSquareInstagram  size={18} />
        </a>
      </div>

      {/* Book Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-accent transition-colors"
      >
        Book Now
      </motion.button>
    </motion.div>
  );
};

export default ChefCard;
