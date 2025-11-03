import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log('Subscribe:', email);
    setEmail("");
  };

  return (
    <footer className="bg-card border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-script text-2xl font-bold text-primary mb-4">
              Ramani Fashion
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Your destination for authentic handloom sarees and traditional Indian ethnic wear.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" data-testid="button-facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="button-instagram">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="button-twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="button-youtube">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/contact" className="text-muted-foreground hover:text-foreground" data-testid="link-contact">Contact Us</a></li>
              <li><a href="/shipping" className="text-muted-foreground hover:text-foreground" data-testid="link-shipping">Shipping Info</a></li>
              <li><a href="/returns" className="text-muted-foreground hover:text-foreground" data-testid="link-returns">Returns & Exchange</a></li>
              <li><a href="/faq" className="text-muted-foreground hover:text-foreground" data-testid="link-faq">FAQs</a></li>
              <li><a href="/size-guide" className="text-muted-foreground hover:text-foreground" data-testid="link-size-guide">Size Guide</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-muted-foreground hover:text-foreground" data-testid="link-about-footer">About Us</a></li>
              <li><a href="/blog" className="text-muted-foreground hover:text-foreground" data-testid="link-blog">Blog</a></li>
              <li><a href="/track-order" className="text-muted-foreground hover:text-foreground" data-testid="link-track">Track Order</a></li>
              <li><a href="/offers" className="text-muted-foreground hover:text-foreground" data-testid="link-offers">Offers</a></li>
              <li><a href="/gift-cards" className="text-muted-foreground hover:text-foreground" data-testid="link-gift-cards">Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to get special offers and updates
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                data-testid="input-newsletter"
              />
              <Button onClick={handleSubscribe} data-testid="button-subscribe">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 Ramani Fashion India. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="/privacy" className="hover:text-foreground" data-testid="link-privacy">Privacy Policy</a>
              <a href="/terms" className="hover:text-foreground" data-testid="link-terms">Terms of Service</a>
              <a href="/cookie-policy" className="hover:text-foreground" data-testid="link-cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
