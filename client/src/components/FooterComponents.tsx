import {
  Sparkles,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function FooterComponents() {
  return (
    <footer className="bg-background text-foreground py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <Sparkles className="h-6 w-6 text-primary mr-2" />
              <span className="text-2xl font-bold">Prodexa AI</span>
            </div>
            <p className="text-muted-foreground">
             Enhancing your productivity with the power of AI.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/" className="hover:text-primary">Home</a></li>
              <li><a href="/about" className="hover:text-primary">About us</a></li>
              <li><a href="/contact" className="hover:text-primary">Contact us</a></li>
              <li><a href="/privacy" className="hover:text-primary">Privacy policy</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h3>
            <p className="text-muted-foreground mb-4">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-auto flex-1"
              />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 text-center text-muted-foreground text-sm border-t">
          Copyright &copy; {new Date().getFullYear()} © Prodexa AI. All Right Reserved.
        </div>
      </div>
    </footer>
  );
}
