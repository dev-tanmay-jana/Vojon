import { Calendar, ArrowRight } from "lucide-react";
import foodPizza from "../assets/food-pizza.png";
import foodSalad from "../assets/food-salad.png";
import cocktailOrange from "../assets/cocktail-orange.jpg";
import dish4 from "../assets/dish4.png";
import biriyani from "../assets/chicken-biriyani.jpg";
import { motion } from "framer-motion";

const news = [
  {
    title: "New Summer Menu Launch",
    excerpt: "Discover our refreshing new dishes perfect for the warm season.",
    date: "Jan 15, 2024",
    image: foodSalad,
    category: "Menu Update",
  },
  {
    title: "Award-Winning Pizza Recipe",
    excerpt: "Our signature pizza wins the regional culinary award.",
    date: "Jan 10, 2024",
    image: foodPizza,
    category: "Awards",
  },
  {
    title: "Cocktail Masterclass Event",
    excerpt: "Join our bartender for an exclusive cocktail making session.",
    date: "Jan 5, 2024",
    image: cocktailOrange,
    category: "Events",
  },
  {
    title: "Healthy Eating Tips",
    excerpt: "Learn how to maintain a balanced diet with our expert advice.",
    date: "Jan 1, 2024",
    image: dish4,
    category: "Health",
  },
  {
    title: "The Perfect Biryani Recipe",
    excerpt: "Master the art of making authentic biryani at home with our step-by-step guide.",
    date: "Dec 28, 2025",
    image: biriyani,
    category: "Recipes",
  }
];

const News = () => {
    // animationVariants.js
  const marqueeVariants = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 60, // slower = smoother
        ease: "linear",
      },
    },
  },
};


  return (
    <section id="blog" className="section-padding pt-10 pb-10 bg-background">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">Latest Updates</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-2 text-foreground">
            Recent News
          </h2>
        </div>

        {/* News Grid */}
       <motion.div className="w-full">
  <motion.div
    className="flex gap-6 w-max "
    variants={marqueeVariants}
    animate="animate"
    whileHover={{ animationPlayState: "paused" }}
  >
    {[...news, ...news].map((item, index) => (
      <motion.article
        key={index}
        className="group bg-card rounded-3xl w-80 overflow-hidden shadow-soft flex-shrink-0"
        whileHover={{ y: -8, scale: 1.03 }}
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
            {item.category}
          </div>
        </div>
        <div className="p-2">
            {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>

                <h3 className="font-display font-semibold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-muted-foreground mb-4">{item.excerpt}</p>

                <a
                  href="#"
                  className="inline-flex items-center text-primary font-semibold group-hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
        </div>
      </motion.article>
    ))}
  </motion.div>
</motion.div>

      </div>
    </section>
  );
}

export default News;