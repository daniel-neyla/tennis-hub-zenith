
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
        isScrolled ? "navbar-scrolled" : "navbar-default"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className={cn(
            "text-2xl font-bold relative z-20 flex items-center",
            isScrolled ? "logo-scrolled" : "logo-default"
          )}
          onClick={handleHomeClick}
        >
          <span className="text-tennis-blue">EULTC</span>
          <span className="text-sm text-tennis-yellow text-muted-foreground ml-2 hidden sm:inline">
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
                  ? "text-tennis-blue"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
              onClick={link.name === "Home" ? handleHomeClick : undefined}
            >
              {link.name}
            </Link>
          ))}

          <Button className="ml-2 bg-tennis-blue text-tennis-yellow hover:bg-tennis-blue/90">
            Member Login
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-tennis-dark z-20"
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
            "fixed inset-0 bg-white z-10 flex flex-col px-6 py-24 transition-transform duration-300 ease-in-out md:hidden",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
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
                    ? "text-tennis-blue bg-blue-50"
                    : "text-tennis-dark hover:bg-muted"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button className="w-full mt-4 bg-tennis-blue hover:bg-tennis-blue/90">
              Member Login
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}