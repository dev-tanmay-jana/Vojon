import { motion } from "framer-motion";
import { Check, Award, Users, Clock, Truck } from "lucide-react";
import foodPizza from "../assets/food-pizza.png";

const features = [
  "Fresh ingredients sourced daily",
  "Expert chefs with 20+ years experience",
  "Fast delivery in under 30 minutes",
  "100% satisfaction guaranteed",
];

const stats = [
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Users, value: "50K+", label: "Happy Customers" },
  { icon: Clock, value: "30min", label: "Average Delivery" },
  { icon: Truck, value: "1000+", label: "Daily Deliveries" },
];

const About = () => {
  return (
    <section id="about" className="section-padding section-dark ">
      <div className="container-custom bg-black pt-10 pb-15">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <motion.img
                src={foodPizza}
                alt="Delicious Pizza"
                className="rounded-3xl w-full max-w-md mx-auto shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 md:right-0 bg-card p-6 rounded-2xl shadow-elevated"
              >
                
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                    <Award className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="absolute -bottom-15  left-1/5  bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-glow"><p className="font-semibold">🏆 Award Winning Restaurant</p></div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">Best Quality</p>
                    <p className="text-sm text-muted-foreground">Premium Ingredients</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background Element */}
            <div className="absolute top-10 left-10 w-full h-full border-2 border-primary/30 rounded-3xl -z-0" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-medium mb-2 block">ABOUT US</span>
            <h2 className="heading-section text-white text-4xl mb-6">
              Why Choose <span className="text-primary">Vojon?</span>
            </h2>
            <p className="text-gray-300 mb-8 text-body">
              We are passionate about delivering not just food, but an experience. 
              Every dish is crafted with care using the freshest ingredients and 
              traditional recipes passed down through generations.
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition">
              Learn More About Us
            </button>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10"
            >
              <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
