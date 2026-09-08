"use client";
import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";

export default function AboutPage() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full bg-[#00418d] text-white relative overflow-hidden pt-20 md:pt-24">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/homepage/banner_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            ELEVATE YOUR BUSINESS
          </h1>
          <p className="text-center max-w-3xl mx-auto text-sm mb-8">
            Skill Assessments Done With The Utmost Knowledge, Integrity, Trust,
            Respect And Security. Our Objective Is To Provide You With Accurate
            Insights Into The Skill Levels Of Your Current And Prospective
            Workforce.
          </p>
          <div className="flex justify-center">
            <button className="bg-[#f73e5d] text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all">
              Sign Up
            </button>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
          <div className="relative">
            <Image
              src="/images/homepage/home_globe.gif"
              alt="SkillKwiz assessment platform"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6 auto-rows-min">
          <div className="group bg-white overflow-hidden hover:bg-[#00418d] transition-all duration-500 p-6 rounded-lg shadow-lg flex flex-col items-center text-center h-[250px] hover:h-[350px]">
            <Image
              src="/images/aboutpage/eye.gif"
              alt="Our Vision"
              width={200}
              height={200}
              className="w-auto h-auto max-h-32 object-contain mb-4"
            />
            <h3 className="text-[#272727] font-bold group-hover:text-white transition-colors duration-300">
              OUR VISION
            </h3>
            <p className="opacity-0 group-hover:opacity-100 group-hover:mt-4 transition-opacity duration-500 text-sm text-[#272727] group-hover:text-white text-center">
              We envision a future where skill assessments empower companies to
              grow confidently by hiring and developing talent based on data,
              not guesswork.
            </p>
          </div>
          <div className="group bg-white overflow-hidden hover:bg-[#00418d] transition-all duration-500 p-6 rounded-lg shadow-lg flex flex-col items-center text-center h-[250px] hover:h-[350px]">
            <Image
              src="/images/aboutpage/mission.gif"
              alt="Our Mission"
              width={200}
              height={200}
              className="w-auto h-auto max-h-32 object-contain mb-4"
            />
            <h3 className="text-[#272727] font-bold group-hover:text-white transition-colors duration-300">
              OUR MISSION
            </h3>
            <p className="opacity-0 group-hover:opacity-100 group-hover:mt-4 transition-opacity duration-500 text-sm text-[#272727] group-hover:text-white text-center">
              Our mission is to deliver accurate, reliable skill assessments
              that help organizations make informed hiring and development
              decisions with confidence.
            </p>
          </div>

          <div className="group bg-white overflow-hidden hover:bg-[#00418d] transition-all duration-500 p-6 rounded-lg shadow-lg flex flex-col items-center text-center h-[250px] hover:h-[350px]">
            <Image
              src="/images/aboutpage/purpose.gif"
              alt="Our Purpose"
              width={200}
              height={200}
              className="w-auto h-auto max-h-32 object-contain mb-4"
            />
            <h3 className="text-[#272727] font-bold group-hover:text-white transition-colors duration-300">
              OUR PURPOSE
            </h3>
            <p className="opacity-0 group-hover:opacity-100 group-hover:mt-4 transition-opacity duration-500 text-sm text-[#272727] group-hover:text-white text-center">
              SkillKwiz has a single purpose — to create stakeholder value by
              providing accurate, authenticated insights into the skill levels
              of your workforce.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#00418d] mb-6">
                Who We Are ?
              </h2>
              <p className="text-[#272727] mb-6">
                We are your partner in skill assessment. Our expertise lies in
                assessing skill levels in people and quantifying them with
                precision, security, and integrity.
              </p>
              <p className="text-sm text-[#272727] mb-4">
                "SkillKwiz has a single purpose and that is to create
                stakeholder value through authenticated skill assessments."
              </p>
              <p className="text-sm text-[#272727]">
                — Venugopal B A<br />
                CEO, SkillKwiz
              </p>
            </div>

            <div className="w-full md:w-1/2 flex justify-center gap-4">
              <Image
                src="/images/aboutpage/about_who_we_are-0.png"
                alt="Team collaboration"
                height={200}
                width={100}
                className="rounded-lg w-auto h-auto"
              />
              <Image
                src="/images/aboutpage/about_who_we_are-1.png"
                alt="Team collaboration"
                height={200}
                width={100}
                className="rounded-lg w-auto h-auto"
              />
              <Image
                src="/images/aboutpage/about_who_we_are-2.png"
                alt="Team collaboration"
                height={200}
                width={100}
                className="rounded-lg w-auto h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <div className="bg-[#f73e5d] p-4">
                  <Image
                    src="/images/aboutpage/Venugopal.png"
                    alt="CEO Venugopal B A"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-[#f73e5d] text-white text-center py-3 font-bold text-xl">
                  CEO
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-[#272727] mb-6">
                Venugopal B A, a veteran leader in the IT industry with
                experience spanning 24 years in senior leadership roles, has
                chosen to take on the mantle of leading SkillKwiz. His
                understanding of one of the key challenges faced by the services
                sector gave birth to the vision that is SkillKwiz today.
              </p>
              <p className="text-[#272727]">
                With a rich background in the technology industry, he aims to
                establish SkillKwiz as an AI-first company. He is poised to
                take SkillKwiz to its next level of growth by turning it into a
                company that is shaped entirely by the market it serves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section - See SkillKwiz in Action */}
      <section className="w-full bg-gray-50 py-10 sm:py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00418d] mb-3">
              See SkillKwiz in Action
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Watch how SkillKwiz transforms skill assessment and simplifies
              your hiring process with secure, verified evaluations conducted
              in authenticated testing centers.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-200">
            {!showVideo ? (
              <div
                className="relative w-full aspect-video cursor-pointer group"
                onClick={() => setShowVideo(true)}
              >
                <Image
                  src="/images/aboutpage/about_video.png"
                  alt="See SkillKwiz in Action video preview"
                  fill
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 100vw, 900px"
                  priority
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#00418d] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white ml-1 sm:ml-2" />
                  </div>
                </div>
              </div>
            ) : (
              <video
                className="w-full aspect-video bg-black"
                controls
                autoPlay
                playsInline
                poster="/images/aboutpage/about_video.png"
              >
                <source
                  src="/images/aboutpage/about_video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
