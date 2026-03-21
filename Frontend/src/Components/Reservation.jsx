
import { Calendar, Clock, Users } from "lucide-react";
import foodPizza from "../assets/food-pizza.png";
import ReserveTable from "../Pages/ReserveTable";
import { useNavigate } from "react-router-dom";
const Reservation = () => {
  const navigate = useNavigate();
    
  return (
    <section className="section-padding pt-6 mb-10 pb-15 bg-gradient-to-br from-orange-500 to-red-400/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-card/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-card/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="text-primary-foreground space-y-8">
            <div className="inline-block px-4 py-2 bg-primary-foreground/20 rounded-full backdrop-blur-sm">
              <span className="text-sm font-medium">Book a Table</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight">
              Reserve A Table For Your Special Occasion
            </h2>

            <p className="text-primary-foreground/80 text-lg">
              Whether it's a romantic dinner, family gathering, or business meeting, 
              we'll make your experience unforgettable.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-primary-foreground/10 rounded-2xl backdrop-blur-sm">
                <Calendar className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">Open Daily</p>
              </div>
              <div className="text-center p-4 bg-primary-foreground/10 rounded-2xl backdrop-blur-sm">
                <Clock className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">11AM - 11PM</p>
              </div>
              <div className="text-center p-4 bg-primary-foreground/10 rounded-2xl backdrop-blur-sm">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">Up to 100</p>
              </div>
            </div>

            <button
                onClick={() => navigate('/booking')}
             className="bg-yellow-500 hover:bg-secondary/90 text-primary-foreground px-8 py-4 rounded-full font-bold text-lg transition-colors">
              Reserve Now
            </button>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-strong">
              <img
                src={foodPizza}
                alt="Delicious pizza"
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-2xl shadow-strong max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call for Reservations</p>
                  <p className="font-bold text-foreground text-lg">+1 234 567 890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reservation;