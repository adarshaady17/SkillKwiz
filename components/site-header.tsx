"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <div className="w-full fixed top-0 left-0 z-[100] pointer-events-none">
      <nav className="pointer-events-auto flex flex-col w-full md:w-11/12 lg:w-4/5 xl:w-3/5 mx-auto bg-[#335f92] text-white rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 md:py-4">
          {/* Logo - Always visible - complete asset includes wordmark and tagline */}
          <Link
            href="/"
            className="flex items-center gap-2 flex-shrink-0 z-10"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="bg-white relative w-32 h-14 sm:w-36 sm:h-16 md:w-40 md:h-[72px] lg:w-44 lg:h-20 flex items-center justify-center">
              <Image
                src="/skillkwiz-logo.svg"
                alt="SkillKwiz - How much do you know?"
                fill
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-center md:gap-1 lg:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative group py-2 px-2 md:px-3 lg:px-4 text-sm lg:text-base transition-all ${
                  pathname === item.href
                    ? "text-yellow-400 font-semibold"
                    : "text-white"
                }`}
              >
                <span>{item.label}</span>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-[#48caed] to-[#f6c648] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                {pathname === item.href && (
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400"></span>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center py-4 bg-[#335f92] rounded-b-3xl w-full shadow-lg border-t border-blue-700/30">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative group py-3 text-lg w-full text-center transition-colors ${
                  pathname === item.href
                    ? "text-yellow-400 font-semibold bg-blue-800/30"
                    : "text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
