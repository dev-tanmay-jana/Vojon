import { motion } from "framer-motion";
import { Smartphone, Apple, Play } from "lucide-react";
const AppDownload = () => {
  return (
    <section className="section-padding section-warm mt-15 mb-10 overflow-hidden">
      <div className="container-custom">
        <div className="relative bg-gradient-to-r from-primary to-crimson-dark rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className="heading-section text-white mb-6">
                Download Our App<br />For More Features
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                Get exclusive deals, track your orders in real-time, and enjoy 
                a seamless ordering experience with our mobile app.
              </p>

              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-black hover:bg-gray-900 text-white px-6 py-6 rounded-xl flex items-center gap-3 transition-transform hover:scale-105">
                  <Apple className="w-8 h-8" />
                  <div className="text-left">
                    <p className="text-xs text-gray-400">Download on the</p>
                    <p className="text-lg font-semibold">App Store</p>
                  </div>
                </button>
                <button className="bg-black hover:bg-gray-900 text-white px-6 py-6 rounded-xl flex items-center gap-3 transition-transform hover:scale-105">
                  <Play className="w-8 h-8" />
                  <div className="text-left">
                    <p className="text-xs text-gray-400">Get it on</p>
                    <p className="text-lg font-semibold">Google Play</p>
                  </div>
                </button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-8 justify-center lg:justify-start">
                <div>
                  <p className="text-3xl font-bold text-white">100K+</p>
                  <p className="text-white/70">Downloads</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">4.8</p>
                  <p className="text-white/70">App Rating</p>
                </div>
              </div>
            </motion.div>

            {/* Right - Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative flex justify-center lg:justify-end"
            >
                
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                
                {/* Phone Frame */}
                <div className="relative w-64 h-[500px] bg-black rounded-[3rem] p-3 shadow-2xl">
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />
                  <div className="w-full h-full bg-gradient-to-b from-gray-900 to-gray-800 rounded-[2.5rem] flex items-center justify-center">
                    <div className=" absolute   -left-30 space-y-4">
                        <div className="bg-card p-4 rounded-2xl shadow-soft">
                            <p className="text-sm font-semibold text-foreground">Today's Special</p>
                            <p className="text-xs text-muted-foreground">Ribeye Steak - $45</p>
                        </div>
                        <div className="bg-primary p-4 rounded-2xl"><p className="text-sm font-semibold text-primary-foreground">Order Now</p><p className="text-xs text-primary-foreground/80">Free delivery over $50</p></div><div className="bg-card p-4 rounded-2xl shadow-soft"><p className="text-sm font-semibold text-foreground">Your Reservation</p><p className="text-xs text-muted-foreground">Tonight, 7:00 PM</p></div></div>
                    <div className="text-center text-white p-6">
                      <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-2xl flex items-center justify-center">
                        <span className="text-2xl font-bold">V</span>
                      </div>
                      <p className="font-display text-2xl font-bold mb-2">Vojon App</p>
                      <div className="absolute -right-8 top-1/4 bg-secondary text-secondary-foreground px-4 py-2 rounded-xl shadow-medium"><p className="text-sm font-bold">4.9 ⭐</p><p className="text-xs">50k+ Reviews</p></div>
                      <p className="text-gray-400 text-sm">Order delicious food anytime, anywhere</p>
                      <div className="mt-8">
                        <Smartphone className="w-12 h-12 mx-auto text-primary animate-bounce" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-10 -right-10 w-20 h-20 bg-secondary rounded-full opacity-50"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-5 -left-5 w-16 h-16 bg-white/20 rounded-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
