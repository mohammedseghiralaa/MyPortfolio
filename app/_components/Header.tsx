"use client";
import { JSX, useState, useEffect } from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import ToggleButton from "./ToggleButton";
import { Menu, X } from "lucide-react";

export default function Header(): JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isPageLoaded, setIsPageLoaded] = useState<boolean>(false); // New state

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
  };

  // Trigger animation on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100); // small delay to allow transition
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Main Header Bar */}
      <div
        className={`flex items-center justify-between px-4 md:px-8 lg:px-17 py-4 border-b backdrop-blur-sm bg-primary/10 border-primary/20
        transition-all duration-700 ease-out
        ${
          isPageLoaded
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-6"
        }
        `}
      >
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          <NavBar isMobile={false} closeMenu={closeMobileMenu} />
          <ToggleButton />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <ToggleButton />
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-8 h-8 text-primary" />
            ) : (
              <Menu className="w-8 h-8 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 z-50
        backdrop-blur-md bg-primary/95 border-b border-primary/20
        transition-all duration-300 ease-in-out 
        ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }
        `}
      >
        <NavBar isMobile={true} closeMenu={closeMobileMenu} />
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={closeMobileMenu}
        />
      )}
    </header>
  );
}
