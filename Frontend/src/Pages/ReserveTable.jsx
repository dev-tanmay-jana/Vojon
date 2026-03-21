
import { ArrowRight, Calendar, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import ReserveTableForm from "../Components/ReserveTableFrom";

const pageVariants = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  exit: {
    x: "100vw",
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

const ReserveTable = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageVariants}
      className="bg-[#0c1313] text-white"
    >
      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative text-center max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Reserve Your Table
          </h1>
          <p className="text-gray-300 mb-8">
            Experience fine dining with premium taste & ambience
          </p>
          <button className="bg-orange-500 px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-orange-600">
            Book Now <ArrowRight />
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        {["Quality Food", "Perfect Ambience", "Top Chefs"].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="bg-[#121b1b] p-8 rounded-2xl text-center"
          >
            <Star className="mx-auto text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{item}</h3>
            <p className="text-gray-400 text-sm">
              We deliver premium quality experience every time.
            </p>
          </motion.div>
        ))}
      </section>

      {/* CHEF SECTION */}
      <section className="py-20 bg-[#0f1818]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            className="rounded-2xl"
          />
          <div>
            <span className="text-orange-500 uppercase text-sm">Why Choose Us</span>
            <h2 className="text-4xl font-bold mt-3 mb-6">
              Crafted by Expert Chefs
            </h2>
            <p className="text-gray-400 mb-6">
              Our chefs bring world-class expertise and passion to every dish.
            </p>
            <button className="bg-orange-500 px-6 py-3 rounded-full inline-flex items-center gap-2">
              Explore Menu <ArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center px-6">
        {["500+ Dishes", "15 Chefs", "10 Years", "12 Awards"].map((stat, i) => (
          <div key={i}>
            <h3 className="text-3xl font-bold text-orange-500">{stat}</h3>
            <p className="text-gray-400 mt-2">Achievement</p>
          </div>
        ))}
      </section>

      {/* MENU */}
      <section className="py-20 bg-[#0f1818]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-center">Explore Our Foods</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-[#121b1b] rounded-2xl overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1600891964092-4316c288032e"
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">Special Dish</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Delicious & freshly prepared
                  </p>
                  <button className="text-orange-500 font-semibold inline-flex items-center gap-2">
                    Order Now <ArrowRight />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <ReserveTableForm />
      </section>
    </motion.div>
  );
}
export default ReserveTable;
