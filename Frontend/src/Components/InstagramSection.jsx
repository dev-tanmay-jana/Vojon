import { Instagram } from "lucide-react";
import heroSteak from "../assets/hero-steak.jpg";
import foodWings from "../assets/food-wings.jpg";
import foodPizza from "../assets/food-pizza.png";
import foodRibs from "../assets/dish1.png";
import foodSalad from "../assets/dish4.png";
import cocktailOrange from "../assets/cocktail-orange.jpg";

const instagramPosts = [
  heroSteak,
  foodWings,
  foodPizza,
  foodRibs,
  foodSalad,
  cocktailOrange,
];

const InstagramSection = () => {
  return (
    <section className="section-padding pb-10 bg-muted">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Instagram className="w-6 h-6" />
            <span className="font-semibold">@vojonrestaurant</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Follow Us on Instagram
          </h2>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((image, index) => (
            <a
              key={index}
              href="#"
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-soft"
            >
              <img
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-pink-500/60 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InstagramSection;