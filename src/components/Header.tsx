
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { label: "Home", href: "#" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-12 py-4",
        scrolled
          ? "glassmorphism"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="flex items-center gap-2 z-10"
          aria-label="Screeny AI Homepage"
        >
          <span className="text-2xl font-display font-bold gradient-text">Screeny AI</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-medium text-gray-800 hover:text-screeny-blue transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <Button className="btn-gradient px-6 py-2 rounded-full">
            Try For Free
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-10 p-2"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-0 bg-white/95 flex flex-col items-center justify-center transition-all duration-300 ease-in-out",
            mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        >
          <nav className="flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-medium text-lg text-gray-800 hover:text-screeny-blue transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button 
              className="btn-gradient px-6 py-2 rounded-full mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Try For Free
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
