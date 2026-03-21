import { motion } from "framer-motion";
import { Play, Star, Clock, Truck } from "lucide-react";
import heroBurger from "../assets/hero-burger.png";
import wings from "../assets/food-wings.jpg";
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center px-4">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium">🔥 Hot & Fresh Food</span>
            </motion.div>

            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-primary">
                    Welcome to Flavory Restaurant
                </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight">
                The Perfect Space to{" "}
                <span className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">Enjoy Fantastic</span>{" "}
                Food.
                </h1>


            <p className="text-body text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Experience the finest flavors crafted with love and the freshest ingredients.
              Order now and get your favorite meals delivered right to your doorstep.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <button className="btn-primary bg-accent text-white rounded-full p-2 flex items-center gap-2">
                Order Now
                <Truck className="w-5 h-5" />
              </button>
              <button variant="outline" className="btn-outline bg-accent-foreground p-2 rounded-full text-accent flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Video
              </button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-8 justify-center lg:justify-start"
            >
              <div className="text-center">
                <div className="flex items-center gap-1 justify-center mb-1">
                  <Star className="w-5 h-5 fill-secondary text-secondary" />
                  <span className="text-2xl font-bold text-foreground">4.9</span>
                </div>
                <span className="text-sm text-muted-foreground">Ratings</span>
              </div>
              <div className="w-px bg-border h-12 hidden sm:block" />
              <div className="text-center">
                <div className="flex items-center gap-1 justify-center mb-1">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-2xl font-bold text-foreground">30 Min</span>
                </div>
                <span className="text-sm text-muted-foreground">Fast Delivery</span>
              </div>
              <div className="w-px bg-border h-12 hidden sm:block" />
              <div className="text-center">
                <span className="text-2xl font-bold text-foreground">50K+</span>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Main Image */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <img
                  src={heroBurger}
                  alt="Delicious Burger"
                  className="w-full max-w-lg mx-auto drop-shadow-2xl"
                />
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-10 left-0 bg-card p-4 rounded-2xl shadow-elevated"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Truck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Free Delivery</p>
                    <div className="absolute top-10 left-120 w-45 h-60 rounded-2xl overflow-hidden shadow-medium animate-fade-in" >
                        <img src={wings} alt="Crispy chicken wings" className="w-full h-full object-cover" /></div>
                    <p className="text-sm text-muted-foreground">Orders over $30</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-10 right-0 bg-card p-4 rounded-2xl shadow-elevated"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-muted border-2 border-card"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">150+</p>
                    <p className="text-sm text-muted-foreground">Orders Today</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square bg-primary/5 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
