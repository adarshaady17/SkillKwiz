"use client";
import Image from "next/image";
import { useState } from "react";
import { Download } from "lucide-react";

export default function BlogPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const indicatorClasses = (index: number) =>
    `h-1.5 rounded-full transition-all duration-300 ${
      hoveredIndex === index ? "w-64 bg-[#00418d]" : "w-24 bg-[#c3dfff]"
    }`;

  const blogPosts = [
    {
      img: "/images/blogpage/1.png",
      title: "The Importance of Upskilling in Today's Job Market",
      subtitle: "Why Upskilling Matters in 2025",
      downloadFile: "/dummy-report.pdf",
      downloadName: "upskilling-report-2025.pdf",
    },
    {
      img: "/images/blogpage/2.png",
      title: "How Gamified Learning Enhances Skill Retention",
      subtitle: "The Psychology Behind Gamification",
      downloadFile: "/dummy-report.pdf",
      downloadName: "gamified-learning-report.pdf",
    },
    {
      img: "/images/blogpage/3.png",
      title: "Soft Skills vs. Hard Skills: What Matters More?",
      subtitle: "The Difference Between Soft and Hard Skills",
      downloadFile: "/dummy-report.pdf",
      downloadName: "skills-comparison-report.pdf",
    },
  ];

  const secondaryPosts = [
    {
      img: "/images/blogpage/4.png",
      title: "Top 10 Tech Skills That Can Land You a High-Paying Job",
      subtitle: "Why Tech Skills Are Essential in 2025",
      downloadFile: "/dummy-report.pdf",
      downloadName: "tech-skills-2025.pdf",
    },
    {
      img: "/images/blogpage/5.png",
      title: "How to Stay Motivated While Learning New Skills",
      subtitle: "Why Motivation Is Key to Skill Development",
      downloadFile: "/dummy-report.pdf",
      downloadName: "learning-motivation-guide.pdf",
    },
  ];

  const knowledgeArticles = [
    {
      img: "/images/blogpage/6.png",
      category: "Trends to Watch in 2025",
      title: "The Future of Online Learning",
    },
    {
      img: "/images/blogpage/7.png",
      category: "Trends to Watch in 2025",
      title: "5 Essential Skills to Boost Your Career in 2025",
    },
    {
      img: "/images/blogpage/8.png",
      category: "Trends to Watch in 2025",
      title: "How Gamification Enhances Learning & Engagement",
    },
    {
      img: "/images/blogpage/1.png",
      category: "Trends to Watch in 2025",
      title: "5 Essential Skills to Boost Your Career in 2025",
    },
    {
      img: "/images/blogpage/4.png",
      category: "Trends to Watch in 2025",
      title: "The Power of Microlearning",
    },
    {
      img: "/images/blogpage/2.png",
      category: "Trends to Watch in 2025",
      title: "Revolutionizing the Way We Learn",
    },
  ];

  const handleDownload = (
    e: React.MouseEvent,
    file: string,
    filename: string
  ) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = file;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section className="w-full bg-white pt-28 md:pt-36 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-[#00418d]">
              Mastering Knowledge & Growth
            </h2>
            <p className="text-center max-w-3xl mx-auto mb-8 text-gray-600 text-sm sm:text-base">
              In a world of constant change, continuous learning is the key to
              success. Explore our latest insights and resources.
            </p>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mb-10">
              {blogPosts.map((_, index) => (
                <div key={index} className={indicatorClasses(index)} />
              ))}
            </div>

            {/* Featured Blog Posts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="flex flex-col group cursor-pointer bg-white rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative mb-4 overflow-hidden aspect-[16/10]">
                    <Image
                      src={post.img}
                      alt={post.title}
                      width={380}
                      height={240}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="px-4 sm:px-5 pb-5">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 group-hover:text-[#00418d] transition-colors duration-200 leading-snug">
                      {post.title}
                    </h3>
                    <a
                      href={post.downloadFile}
                      onClick={(e) =>
                        handleDownload(e, post.downloadFile, post.downloadName)
                      }
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00418d] hover:text-[#f73e5d] transition-colors duration-200 group/link"
                    >
                      <span>{post.subtitle}</span>
                      <Download className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity duration-200" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {secondaryPosts.map((post, index) => (
              <div
                key={index}
                className="flex flex-col h-full bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
              >
                <div className="relative h-56 sm:h-60 mb-0 overflow-hidden">
                  <Image
                    src={post.img}
                    alt={post.title}
                    width={580}
                    height={240}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 group-hover:text-[#00418d] transition-colors duration-200 leading-tight">
                    {post.title}
                  </h3>
                  <a
                    href={post.downloadFile}
                    onClick={(e) =>
                      handleDownload(e, post.downloadFile, post.downloadName)
                    }
                    className="inline-flex items-center gap-1.5 mt-auto text-sm font-semibold text-[#00418d] hover:text-[#f73e5d] transition-colors duration-200 group/link pt-2"
                  >
                    <span>{post.subtitle}</span>
                    <Download className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity duration-200" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Knowledge Articles */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#00418d]">
              Mastering Knowledge & Growth
            </h2>
            <p className="max-w-4xl mb-10 sm:mb-12 text-gray-600 text-sm sm:text-base leading-relaxed">
              Knowledge is the foundation of growth. Embrace new ideas, sharpen
              your skills, and stay inspired with insights that empower you to
              achieve more in both your personal and professional journey.
            </p>

            {/* Knowledge Articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 sm:gap-y-6">
              {knowledgeArticles.map((article, index) => (
                <div
                  key={index}
                  className="flex gap-4 sm:gap-5 p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 group cursor-pointer"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-200">
                    <Image
                      src={article.img}
                      alt={article.title}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex flex-col justify-center min-w-0">
                    <p className="text-xs sm:text-sm text-gray-500 mb-1 group-hover:text-[#00418d] transition-colors">
                      {article.category}
                    </p>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#00418d] transition-colors duration-200 leading-snug">
                      {article.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
