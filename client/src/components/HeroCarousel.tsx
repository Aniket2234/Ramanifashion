import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage1 from "@assets/generated_images/Pink_silk_saree_hero_a644da4b.png";
import heroImage2 from "@assets/generated_images/Kanjeevaram_saree_portrait_0444bedd.png";
import heroImage3 from "@assets/generated_images/Festive_collection_banner_7a822710.png";

const slides = [
  {
    image: heroImage1,
    title: "Festive Collection 2025",
    subtitle: "Celebrate in Style",
    cta: "Shop Now",
  },
  {
    image: heroImage2,
    title: "Premium Silk Sarees",
    subtitle: "Timeless Elegance",
    cta: "Explore Collection",
  },
  {
    image: heroImage3,
    title: "Up to 50% Off",
    subtitle: "Wedding Season Sale",
    cta: "Shop Sale",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
            
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="max-w-xl text-white">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" data-testid={`text-hero-title-${index}`}>
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl mb-8 text-white/90" data-testid={`text-hero-subtitle-${index}`}>
                    {slide.subtitle}
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary text-primary-foreground border border-primary-border"
                    data-testid={`button-hero-cta-${index}`}
                  >
                    {slide.cta}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
        onClick={prevSlide}
        data-testid="button-carousel-prev"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
        onClick={nextSlide}
        data-testid="button-carousel-next"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
            data-testid={`button-carousel-indicator-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
