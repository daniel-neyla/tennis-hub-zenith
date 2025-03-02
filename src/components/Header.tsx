
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavLink = {
  name: string;
  href: string;
};

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Match Results", href: "/results" },
  { name: "Sign Up", href: "/signup" },
  { name: "Match Reports", href: "/reports" },
  { name: "Calendar", href: "/calendar" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled 
          ? "bg-white shadow-md" 
          : "bg-tennis-green"
      )}
    >
      <div className="container flex items-center justify-between py-3">
        {/* Logo */}
        <Link
          to="/"
          className={cn(
            "text-2xl font-bold relative z-20 flex items-center",
            isScrolled 
              ? "text-tennis-green" 
              : "text-white"
          )}
          onClick={handleHomeClick}
        >
          <span>EULTC</span>
          <span className={cn(
            "text-sm ml-2 hidden sm:inline",
            isScrolled 
              ? "text-tennis-yellow" 
              : "text-tennis-yellow"
          )}>
            Tennis Club
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "px-4 py-2 rounded-md text-base font-medium transition-colors",
                location.pathname === link.href
                  ? isScrolled 
                    ? "text-tennis-green bg-tennis-yellow/20" 
                    : "text-tennis-yellow bg-white/10"
                  : isScrolled 
                    ? "text-gray-700 hover:text-tennis-green hover:bg-gray-100" 
                    : "text-white hover:text-tennis-yellow hover:bg-white/10"
              )}
              onClick={link.name === "Home" ? handleHomeClick : undefined}
            >
              {link.name}
            </Link>
          ))}

          <Button className={cn(
            "ml-2",
            isScrolled 
              ? "bg-tennis-green text-white hover:bg-tennis-green/90" 
              : "bg-tennis-yellow text-tennis-green hover:bg-tennis-yellow/90"
          )}>
            Member Login
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "md:hidden z-20", 
            isScrolled ? "text-tennis-green" : "text-white"
          )}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 flex flex-col px-6 py-24 transition-transform duration-300 ease-in-out md:hidden z-10",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
            "bg-tennis-green"
          )}
        >
          <nav className="flex flex-col space-y-4 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "px-4 py-3 w-full text-center text-lg font-medium rounded-md transition-colors",
                  location.pathname === link.href
                    ? "text-tennis-green bg-tennis-yellow"
                    : "text-white hover:bg-white/10"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button className="w-full mt-4 bg-tennis-yellow text-tennis-green hover:bg-tennis-yellow/90">
              Member Login
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
