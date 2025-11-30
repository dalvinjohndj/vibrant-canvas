import { motion } from "framer-motion";
import heroImage from "@/assets/hero-property.jpg";
import SearchBar from "@/components/SearchBar";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury Property showcasing premium real estate opportunities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        {/* Animated Mesh Gradient Overlay */}
        <motion.div 
          className="absolute inset-0 opacity-60"
          style={{ background: 'var(--gradient-mesh)' }}
          animate={{
            background: [
              'radial-gradient(at 40% 20%, hsl(207 76% 42% / 0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, hsl(36 97% 55% / 0.2) 0px, transparent 50%)',
              'radial-gradient(at 60% 80%, hsl(207 76% 42% / 0.3) 0px, transparent 50%), radial-gradient(at 20% 100%, hsl(36 97% 55% / 0.2) 0px, transparent 50%)',
              'radial-gradient(at 40% 20%, hsl(207 76% 42% / 0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, hsl(36 97% 55% / 0.2) 0px, transparent 50%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 md:left-20 w-16 h-16 md:w-20 md:h-20 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 right-10 md:right-32 w-12 h-12 md:w-16 md:h-16 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30"
        animate={{ 
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-0">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6 text-white/90 text-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span>Trusted by 500+ investors across East Africa</span>
          </motion.div>

          <motion.h1 
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Invest in High-Value Assets<br className="hidden md:block" />
            <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
              Real Estate, Mining & Hospitality
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Breakthrough Prime Properties connects investors with premium opportunities
            in East Africa. Explore exclusive listings and bespoke advisory services.
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            className="mb-6 md:mb-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <SearchBar />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8 md:mb-12 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Button size="lg" className="bg-accent hover:bg-accent-dark text-white group">
              Browse Properties
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20">
              Schedule Consultation
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { number: "500+", label: "Properties Listed" },
              { number: "$2.5B", label: "Assets Under Management" },
              { number: "15+", label: "Years Experience" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div 
                key={stat.label} 
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 md:p-6 text-white"
                whileHover={{ scale: 1.05, borderColor: "hsl(var(--accent))" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.2 }}
              >
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm lg:text-base text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
