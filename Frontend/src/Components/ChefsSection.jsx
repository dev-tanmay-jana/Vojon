import { motion } from "framer-motion";
import ChefCard from "./ChefCard";
import chef1 from "../assets/chef1.png";
import chef2 from "../assets/chef2.png";
import chef3 from "../assets/chef3.png";

const chefs = [
  {
    id: 1,
    image: chef1,
    name: "Mr. Tanmay Jana",
    rating: 4.7,
    experience: 15,
    dishes: 10,
    customers: 1000,
  },
  {
    id: 2,
    image: chef2,
    name: "Ms. Sarah Mitchell",
    rating: 4.7,
    experience: 12,
    dishes: 10,
    customers: 1000,
  },
  {
    id: 3,
    image: chef3,
    name: "Mr. Alex Romano",
    rating: 4.7,
    experience: 15,
    dishes: 10,
    customers: 1000,
  },
];

const ChefsSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Our Chef
          </h2>
        </motion.div>

        {/* Chefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {chefs.map((chef, index) => (
            <ChefCard
              key={chef.id}
              image={chef.image}
              name={chef.name}
              rating={chef.rating}
              experience={chef.experience}
              dishes={chef.dishes}
              customers={chef.customers}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefsSection;
