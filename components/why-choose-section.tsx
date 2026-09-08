import Link from "next/link";

export default function WhyChooseSection() {
  const cardWidth = "w-[290px] lg:w-[300px]";
  const cardPadding = "p-6";
  const sameHeight = "h-[410px] lg:h-[420px] flex flex-col";

  return (
    <section className="text-white relative overflow-hidden">
      {/* Background Layer — TWO BLUE BANDS with WHITE GAP between */}
      <div className="absolute inset-0">
        {/* Top Blue Band — 45% height */}
        <div className="absolute top-0 left-0 right-0 h-[45%] z-0">
          <img
            src="/images/homepage/why_choose_banner_2.png"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>

        {/* The MIDDLE WHITE GAP (between bands) — where cards straddle */}
        <div
          className="absolute left-0 right-0 top-[45%] h-[10%] bg-white z-0"
          aria-hidden="true"
        />

        {/* Bottom Blue Band — 45% height (starts at 55%) */}
        <div className="absolute bottom-0 left-0 right-0 h-[45%] z-0">
          <img
            src="/images/homepage/why_choose_banner_2.png"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          {/* Globe overlay inside bottom band only */}
          <div className="absolute inset-0 flex justify-center items-center opacity-30 overflow-hidden pointer-events-none">
            <img
              src="/images/homepage/home_globe.gif"
              alt="SkillKwiz global talent network"
              className="w-full max-w-3xl h-auto object-contain"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 py-12 sm:py-14 md:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2">
          Why Choose{" "}
          <span className="text-white">
            Skill<span className="text-[#f73e5d]">Kwiz</span>
          </span>{" "}
          ?
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-14 text-sm sm:text-base text-white/90 leading-relaxed">
          Discover our unique value propositions designed to enhance your
          recruitment strategy. Experience the difference SkillKwiz can make
          in your organization.
        </p>

        {/* Cards Container — Fan Layout (desktop and tablet). Cards STRADDLE the white mid-gap.
             ALL THREE CARDS share identical base dimensions — only rotation/position/z-index differs.
             Transform is driven by CSS custom properties so hover preserves rotation. */}
        <div
          className="hidden md:block relative w-full h-[600px] max-w-6xl mx-auto"
          aria-label="SkillKwiz value propositions: three feature cards fanned out"
        >
          {/* LEFT CARD — Skill Library (counter-clockwise rotate, behind center, raised higher so it angles down) */}
          <div
            className={`absolute top-[60px] lg:top-[60px]
                       left-[calc(50%-120px)] lg:left-[calc(50%-230px)]
                       ${cardWidth} ${sameHeight} ${cardPadding}
                       bg-white rounded-2xl
                       shadow-lg
                       transition-[transform,box-shadow] duration-300 ease-out
                       hover:shadow-[0_30px_70px_-18px_rgba(0,0,0,0.5)]
                       z-10
                       fan-card`}
            style={{
              "--card-rotate": "-28deg",
              "--card-base-y": "-30px",
              "--card-center-x": "0px",
              transformOrigin: "center bottom",
              backfaceVisibility: "hidden",
              willChange: "transform",
            } as React.CSSProperties}
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-[72px] h-[72px] rounded-full bg-[#c3dfff] flex items-center justify-center overflow-hidden shadow-inner">
                <img
                  src="/images/homepage/books.gif"
                  alt="Skill Library icon"
                  className="w-full h-full object-cover"
                  width={80}
                  height={80}
                />
              </div>
            </div>
            {/* Heading */}
            <h3 className="text-[#00418d] text-xl md:text-2xl font-bold text-center mb-5">
              Skill Library
            </h3>
            {/* Body — matches Image 2 reference */}
            <p className="text-gray-700 text-center text-sm md:text-[0.95rem] leading-relaxed">
              Access our extensive skill assessments across technical,
              professional, and soft skills for comprehensive candidate
              evaluation.
            </p>
          </div>

          {/* CENTER CARD — Secure Testing (STRAIGHT, same size, frontmost, slightly lower) */}
          <div
            className={`absolute top-[60px] left-1/2
                       ${cardWidth} ${sameHeight} ${cardPadding}
                       bg-white rounded-2xl
                       shadow-2xl
                       transition-[transform,box-shadow] duration-300 ease-out
                       hover:shadow-[0_40px_90px_-20px_rgba(0,0,0,0.65)]
                       z-30
                       fan-card-center`}
            style={{
              "--card-center-x": "-50%",
              "--card-base-y": "20px",
              backfaceVisibility: "hidden",
              willChange: "transform",
            } as React.CSSProperties}
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-[72px] h-[72px] rounded-full bg-[#c3dfff] flex items-center justify-center overflow-hidden shadow-inner">
                <img
                  src="/images/homepage/guard.gif"
                  alt="Secure Testing shield icon"
                  className="w-full h-full object-cover"
                  width={80}
                  height={80}
                />
              </div>
            </div>
            {/* Heading */}
            <h3 className="text-[#00418d] text-xl md:text-2xl font-bold text-center mb-5">
              Secure Testing
            </h3>
            {/* Body — matches Image 2 reference */}
            <p className="text-gray-700 text-center text-sm md:text-[0.95rem] leading-relaxed">
              Our testing is done in secure content-aware environments.
              Candidates are authenticated through multiple identification
              layers including biometric verification such as facial
              recognition, security numbers, which are then periodically
              validated throughout the test.
            </p>
          </div>

          {/* RIGHT CARD — Flexible Pricing (clockwise rotate, behind center, raised higher so it angles down) */}
          <div
            className={`absolute top-[60px] lg:top-[60px]
                       left-[calc(50%-60px)] lg:left-[calc(50%-70px)]
                       ${cardWidth} ${sameHeight} ${cardPadding}
                       bg-white rounded-2xl
                       shadow-lg
                       transition-[transform,box-shadow] duration-300 ease-out
                       hover:shadow-[0_30px_70px_-18px_rgba(0,0,0,0.5)]
                       z-10
                       fan-card`}
            style={{
              "--card-rotate": "28deg",
              "--card-base-y": "-30px",
              "--card-center-x": "0px",
              transformOrigin: "center bottom",
              backfaceVisibility: "hidden",
              willChange: "transform",
            } as React.CSSProperties}
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-[72px] h-[72px] rounded-full bg-[#c3dfff] flex items-center justify-center overflow-hidden shadow-inner">
                <img
                  src="/images/homepage/dollar.gif"
                  alt="Flexible Pricing dollar icon"
                  className="w-full h-full object-cover"
                  width={80}
                  height={80}
                />
              </div>
            </div>
            {/* Heading */}
            <h3 className="text-[#00418d] text-xl md:text-2xl font-bold text-center mb-5">
              Flexible Pricing
            </h3>
            {/* Body — matches Image 2 reference */}
            <p className="text-gray-700 text-center text-sm md:text-[0.95rem] leading-relaxed">
              Our pricing model is designed to align with your needs. Pay only
              for what you use with our flexible system. Larger organizations
              can benefit from a tailored plan with volume discounts and
              custom pricing solutions.
            </p>
          </div>
        </div>

        {/* Inline styles: drive card transforms via custom properties so hover preserves rotation.
             --hover-shift is subtracted from base Y on hover for subtle upward motion. */}
        <style jsx>{`
          :global(.fan-card) {
            transform: translateX(var(--card-center-x, 0))
              rotate(var(--card-rotate, 0deg))
              translateY(var(--card-base-y, 0));
          }
          :global(.fan-card:hover) {
            transform: translateX(var(--card-center-x, 0))
              rotate(var(--card-rotate, 0deg))
              translateY(calc(var(--card-base-y, 0) - 8px));
          }
          :global(.fan-card-center) {
            transform: translateX(-50%) translateY(var(--card-base-y, 0));
          }
          :global(.fan-card-center:hover) {
            transform: translateX(-50%)
              translateY(calc(var(--card-base-y, 0) - 8px));
          }
        `}</style>

        {/* Mobile stacked cards — show in place of fan */}
        <div className="md:hidden flex flex-col gap-5 relative z-20">
          {/* Mobile Skill Library */}
          <div
            className="mx-auto w-full max-w-sm bg-white rounded-2xl p-6 shadow-2xl text-black"
            style={{ transform: "rotate(-2deg)" }}
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-[#c3dfff] flex items-center justify-center overflow-hidden shadow-inner">
                <img
                  src="/images/homepage/books.gif"
                  alt="Skill Library icon"
                  className="w-full h-full object-cover"
                  width={64}
                  height={64}
                />
              </div>
            </div>
            <h3 className="text-[#00418d] text-xl font-bold text-center mb-2">
              Skill Library
            </h3>
            <p className="text-gray-700 text-center text-sm leading-relaxed">
              Access our extensive skill assessments across technical,
              professional, and soft skills for comprehensive candidate
              evaluation.
            </p>
          </div>

          {/* Mobile Secure Testing */}
          <div className="mx-auto w-full max-w-sm bg-white rounded-2xl p-6 shadow-2xl text-black z-10 relative">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-[#c3dfff] flex items-center justify-center overflow-hidden shadow-inner">
                <img
                  src="/images/homepage/guard.gif"
                  alt="Secure Testing shield icon"
                  className="w-full h-full object-cover"
                  width={64}
                  height={64}
                />
              </div>
            </div>
            <h3 className="text-[#00418d] text-xl font-bold text-center mb-2">
              Secure Testing
            </h3>
            <p className="text-gray-700 text-center text-sm leading-relaxed">
              Our testing is done in secure content-aware environments.
              Candidates are authenticated through multiple identification
              layers including biometric verification.
            </p>
          </div>

          {/* Mobile Flexible Pricing */}
          <div
            className="mx-auto w-full max-w-sm bg-white rounded-2xl p-6 shadow-2xl text-black"
            style={{ transform: "rotate(2deg)" }}
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-[#c3dfff] flex items-center justify-center overflow-hidden shadow-inner">
                <img
                  src="/images/homepage/dollar.gif"
                  alt="Flexible Pricing dollar icon"
                  className="w-full h-full object-cover"
                  width={64}
                  height={64}
                />
              </div>
            </div>
            <h3 className="text-[#00418d] text-xl font-bold text-center mb-2">
              Flexible Pricing
            </h3>
            <p className="text-gray-700 text-center text-sm leading-relaxed">
              Our pricing model is designed to align with your needs. Pay only
              for what you use with our flexible system.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center relative z-20 mt-10 sm:mt-12 md:mt-16">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
            Join the Talent Revolution
          </h3>
          <p className="max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base text-white/90 leading-relaxed">
            Take the first step towards transforming your hiring process with
            SkillKwiz.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center justify-center bg-[#f6c648] text-black px-6 sm:px-8 py-3 rounded-lg font-bold hover:bg-[#f2bc2e] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-[1.02] text-base"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
