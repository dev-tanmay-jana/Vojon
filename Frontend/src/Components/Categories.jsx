import { motion } from "framer-motion";
import { UtensilsCrossed, Pizza, Beef, Fish, Cookie, Coffee } from "lucide-react";

const categories = [
  { name: "Burgers", icon: Beef, color: "bg-red-500/10 text-red-500", count: 25 },
  { name: "Pizza", icon: Pizza, color: "bg-orange-500/10 text-orange-500", count: 18 },
  { name: "Sushi", icon: Fish, color: "bg-blue-500/10 text-blue-500", count: 32 },
  { name: "Chicken", icon: UtensilsCrossed, color: "bg-yellow-500/10 text-yellow-500", count: 22 },
  { name: "Desserts", icon: Cookie, color: "bg-pink-500/10 text-pink-500", count: 15 },
  { name: "Drinks", icon: Coffee, color: "bg-green-500/10 text-green-500", count: 20 },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Categories = () => {
  return (
    <section className="section-padding mt-8 section-warm">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium mb-2 block">EXPLORE MENU</span>
          <h2 className="heading-section text-foreground text-4xl mb-4">
            Browse Food <span className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">Category</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our wide variety of delicious cuisines from around the world
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
        >
          {categories.map((category) => (
            <motion.div
              key={category.name}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer rounded-full"
            >
              <div className="bg-card rounded-full p-4 text-center shadow-soft hover:shadow-elevated transition-all duration-300 border border-border hover:border-primary/30">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} items</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
