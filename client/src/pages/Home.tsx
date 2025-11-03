import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import OccasionCard from "@/components/OccasionCard";
import TrustBadges from "@/components/TrustBadges";
import TestimonialCard from "@/components/TestimonialCard";
import Footer from "@/components/Footer";

import bridalImage from "@assets/generated_images/Bridal_saree_product_shot_3a9642d4.png";
import cottonImage from "@assets/generated_images/Cotton_saree_product_3295c949.png";
import designerImage from "@assets/generated_images/Designer_saree_modern_91330177.png";
import partyImage from "@assets/generated_images/Party_wear_saree_86e79eab.png";
import casualImage from "@assets/generated_images/Casual_linen_saree_030a208d.png";
import banarasiImage from "@assets/generated_images/Banarasi_saree_detail_604e6fdd.png";
import festiveImage from "@assets/generated_images/Festive_collection_banner_7a822710.png";
import customerImage from "@assets/generated_images/Customer_testimonial_portrait_6ffe6534.png";

export default function Home() {
  const categories = [
    { name: "Silk Sarees", image: bridalImage, itemCount: 156 },
    { name: "Cotton Sarees", image: cottonImage, itemCount: 234 },
    { name: "Designer Sarees", image: designerImage, itemCount: 89 },
    { name: "Bridal Sarees", image: bridalImage, itemCount: 67 },
    { name: "Party Wear", image: partyImage, itemCount: 145 },
    { name: "Casual Wear", image: casualImage, itemCount: 198 },
    { name: "Banarasi", image: banarasiImage, itemCount: 78 },
    { name: "Kanjeevaram", image: bridalImage, itemCount: 92 },
  ];

  const newArrivals = [
    {
      id: "1",
      name: "Elegant Pink Silk Saree with Golden Border",
      image: bridalImage,
      secondaryImage: partyImage,
      price: 3499,
      originalPrice: 6999,
      discount: 50,
      rating: 4.5,
      reviewCount: 128,
      isNew: true,
    },
    {
      id: "2",
      name: "Beautiful Floral Cotton Saree",
      image: cottonImage,
      secondaryImage: casualImage,
      price: 1999,
      originalPrice: 3999,
      discount: 50,
      rating: 4.8,
      reviewCount: 95,
      isNew: true,
    },
    {
      id: "3",
      name: "Contemporary Designer Saree",
      image: designerImage,
      secondaryImage: partyImage,
      price: 4999,
      originalPrice: 9999,
      discount: 50,
      rating: 4.7,
      reviewCount: 67,
      isBestseller: true,
    },
    {
      id: "4",
      name: "Glamorous Party Wear Saree",
      image: partyImage,
      secondaryImage: designerImage,
      price: 2999,
      originalPrice: 5999,
      discount: 50,
      rating: 4.6,
      reviewCount: 143,
      isBestseller: true,
    },
  ];

  const occasions = [
    {
      title: "Weddings",
      image: bridalImage,
      description: "Exquisite sarees for your special day",
    },
    {
      title: "Festivals",
      image: festiveImage,
      description: "Celebrate in traditional elegance",
    },
    {
      title: "Party",
      image: partyImage,
      description: "Stand out at every celebration",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      image: customerImage,
      rating: 5,
      review: "Absolutely stunning saree! The quality is exceptional and the colors are even more beautiful in person.",
      verified: true,
    },
    {
      name: "Anjali Reddy",
      rating: 5,
      review: "Perfect for my sister's wedding. Got so many compliments! The fabric quality is amazing.",
      verified: true,
    },
    {
      name: "Meera Patel",
      image: customerImage,
      rating: 4,
      review: "Beautiful collection and fast delivery. Will definitely shop again from Ramani Fashion.",
      verified: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={3} wishlistCount={5} />
      
      <main>
        <HeroCarousel />

        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-8" data-testid="text-section-categories">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <CategoryCard
                key={category.name}
                name={category.name}
                image={category.image}
                itemCount={category.itemCount}
                onClick={() => console.log(`Clicked ${category.name}`)}
              />
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold" data-testid="text-section-new-arrivals">
              New Arrivals
            </h2>
            <a href="/new-arrivals" className="text-primary hover:underline" data-testid="link-view-all-new">
              View All →
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={() => console.log(`Added ${product.name} to cart`)}
                onAddToWishlist={() => console.log(`Added ${product.name} to wishlist`)}
                onClick={() => console.log(`Clicked ${product.name}`)}
              />
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-8" data-testid="text-section-occasions">
            Shop by Occasion
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {occasions.map((occasion) => (
              <OccasionCard
                key={occasion.title}
                title={occasion.title}
                image={occasion.image}
                description={occasion.description}
                onClick={() => console.log(`Clicked ${occasion.title}`)}
              />
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 py-12">
          <TrustBadges />
        </section>

        <section className="bg-card py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8" data-testid="text-section-testimonials">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.name} {...testimonial} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
