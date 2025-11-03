import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FilterSidebar from "@/components/FilterSidebar";
import ProductCard from "@/components/ProductCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

import bridalImage from "@assets/generated_images/Bridal_saree_product_shot_3a9642d4.png";
import cottonImage from "@assets/generated_images/Cotton_saree_product_3295c949.png";
import designerImage from "@assets/generated_images/Designer_saree_modern_91330177.png";
import partyImage from "@assets/generated_images/Party_wear_saree_86e79eab.png";
import casualImage from "@assets/generated_images/Casual_linen_saree_030a208d.png";
import banarasiImage from "@assets/generated_images/Banarasi_saree_detail_604e6fdd.png";

export default function Products() {
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("recommended");

  const products = [
    {
      id: "1",
      name: "Elegant Pink Silk Saree with Golden Border Work",
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
      name: "Beautiful Floral Cotton Saree Perfect for Daily Wear",
      image: cottonImage,
      secondaryImage: casualImage,
      price: 1999,
      originalPrice: 3999,
      discount: 50,
      rating: 4.8,
      reviewCount: 95,
    },
    {
      id: "3",
      name: "Contemporary Designer Saree with Modern Patterns",
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
      name: "Glamorous Party Wear Saree with Sequin Work",
      image: partyImage,
      secondaryImage: designerImage,
      price: 2999,
      originalPrice: 5999,
      discount: 50,
      rating: 4.6,
      reviewCount: 143,
    },
    {
      id: "5",
      name: "Casual Beige Linen Saree with Simple Border",
      image: casualImage,
      secondaryImage: cottonImage,
      price: 1499,
      originalPrice: 2999,
      discount: 50,
      rating: 4.4,
      reviewCount: 89,
    },
    {
      id: "6",
      name: "Traditional Banarasi Silk Saree with Zari Work",
      image: banarasiImage,
      secondaryImage: bridalImage,
      price: 5999,
      originalPrice: 11999,
      discount: 50,
      rating: 4.9,
      reviewCount: 234,
      isBestseller: true,
    },
    {
      id: "7",
      name: "Elegant Cotton Saree for Office Wear",
      image: cottonImage,
      secondaryImage: casualImage,
      price: 1799,
      originalPrice: 3599,
      discount: 50,
      rating: 4.3,
      reviewCount: 56,
    },
    {
      id: "8",
      name: "Designer Party Saree with Pearl Embellishments",
      image: partyImage,
      secondaryImage: designerImage,
      price: 3999,
      originalPrice: 7999,
      discount: 50,
      rating: 4.7,
      reviewCount: 112,
      isNew: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={3} wishlistCount={5} />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <nav className="text-sm text-muted-foreground mb-4" data-testid="breadcrumb">
            <a href="/" className="hover:text-foreground">Home</a>
            <span className="mx-2">/</span>
            <span className="text-foreground">All Sarees</span>
          </nav>
          
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-2xl font-bold mb-1" data-testid="text-page-title">
                All Sarees
              </h1>
              <p className="text-muted-foreground" data-testid="text-results-count">
                {products.length} products
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="lg:hidden"
                onClick={() => setShowFilters(!showFilters)}
                data-testid="button-toggle-filters"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48" data-testid="select-sort">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="new">What's New</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="discount">Discount</SelectItem>
                  <SelectItem value="rating">Customer Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          <aside className={`w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <FilterSidebar />
          </aside>

          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  onAddToCart={() => console.log(`Added ${product.name} to cart`)}
                  onAddToWishlist={() => console.log(`Added ${product.name} to wishlist`)}
                  onClick={() => console.log(`Clicked ${product.name}`)}
                />
              ))}
            </div>

            <div className="flex justify-center mt-8 gap-2">
              <Button variant="outline" data-testid="button-page-prev">
                Previous
              </Button>
              {[1, 2, 3, 4].map((page) => (
                <Button
                  key={page}
                  variant={page === 1 ? "default" : "outline"}
                  data-testid={`button-page-${page}`}
                >
                  {page}
                </Button>
              ))}
              <Button variant="outline" data-testid="button-page-next">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
