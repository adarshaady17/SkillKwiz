"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AuthenticateSkillsSection from "@/components/authenticate-skills-section";
import WhyChooseSection from "@/components/why-choose-section";
import LoginSection from "@/components/login-section";
import TestimonialsSection from "@/components/testimonials-section";

interface BannerSlide {
  image: string;
  title: string;
  titlePosition: "left" | "center";
}

const bannerSlides: BannerSlide[] = [
  {
    image: "/images/homepage/Carousel/Skill Library.jpg",
    title: "Hiring Simplified",
    titlePosition: "center",
  },
  {
    image: "/images/homepage/Carousel/Pick - Laptop.jpg",
    title: "Quiz Excellence",
    titlePosition: "left",
  },
  {
    image: "/images/homepage/Carousel/Secure Center.jpg",
    title: "Learning Journey",
    titlePosition: "left",
  },
  {
    image: "/images/homepage/Carousel/Drivers License.jpg",
    title: "Skill Assessment",
    titlePosition: "left",
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 600);
    },
    [isTransitioning]
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % bannerSlides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + bannerSlides.length) % bannerSlides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* HERO / BANNER CAROUSEL */}
      <section className="pt-20 md:pt-24 relative z-0">
        <div className="relative w-full h-[55vh] sm:h-[60vh] md:h-[65vh] lg:h-[70vh] overflow-hidden">
          {bannerSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 z-10 scale-100"
                  : "opacity-0 z-0 scale-105 pointer-events-none"
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover w-full h-full"
                  priority={index === 0}
                  sizes="100vw"
                />
              </div>

              {/* Slide title mirrors the clean, image-led reference carousel. */}
              <div className="relative z-10 h-full w-full px-6 sm:px-10 lg:px-6">
                <div
                  className={`absolute top-[19%] ${
                    slide.titlePosition === "center"
                      ? "left-1/2 -translate-x-1/2 text-center whitespace-nowrap"
                      : "left-6 sm:left-10 lg:left-6 text-left"
                  }`}
                >
                  <h1 className="bg-gradient-to-r from-[#2864e4] via-[#84978b] to-[#f5c400] bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight text-transparent">
                    {slide.title}
                  </h1>
                </div>
              </div>
            </div>
          ))}

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-[#00418d] p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-[#00418d] p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-20 flex justify-center gap-2 sm:gap-3">
            {bannerSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? "bg-[#f73e5d] w-8 sm:w-10 h-2.5 sm:h-3"
                    : "bg-white/60 hover:bg-white/80 w-2.5 sm:w-3 h-2.5 sm:h-3"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* AUTHENTICATE SKILLS SECTION */}
      <section className="py-10 sm:py-14 md:py-16 bg-white">
        <AuthenticateSkillsSection />
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="py-10 sm:py-14 md:py-16">
        <WhyChooseSection />
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-10 sm:py-14 md:py-16 bg-white">
        <TestimonialsSection />
      </section>

      {/* LOGIN / SIGNUP SECTION */}
      <section className="py-10 sm:py-14 md:py-16">
        <LoginSection />
      </section>
    </div>
  );
}
