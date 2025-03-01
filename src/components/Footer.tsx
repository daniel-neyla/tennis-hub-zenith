
import React from "react";
import { Link } from "react-router-dom";
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Mail, 
  ChevronRight 
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-tennis-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-white">EULTC</span>
              <span className="text-sm text-gray-400 ml-2">Tennis Club</span>
            </div>
            <p className="text-gray-400 mb-6">
              Edinburgh University Lawn Tennis Club - bringing together tennis players of all abilities for competitive and social play.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tennis-blue transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tennis-blue transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tennis-blue transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contact@eultc.com" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tennis-blue transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Match Results", href: "/results" },
                { name: "Sign Up", href: "/signup" },
                { name: "Match Reports", href: "/reports" },
                { name: "Calendar", href: "/calendar" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-6">Club Info</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "#" },
                { name: "Committee", href: "#" },
                { name: "Membership", href: "#" },
                { name: "Training Sessions", href: "#" },
                { name: "BUCS Competitions", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-6">Contact & Support</h3>
            <ul className="space-y-3">
              {[
                { name: "Contact Us", href: "#" },
                { name: "FAQ", href: "#" },
                { name: "Facilities", href: "#" },
                { name: "Reimbursements", href: "#" },
                { name: "Privacy Policy", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Edinburgh University Lawn Tennis Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
