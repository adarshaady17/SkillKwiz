"use client";

import { useState } from "react";
import { Info, Calendar, Clock, X, CheckCircle2 } from "lucide-react";

export default function ScheduleAssessment() {
  const [selectedCompany, setSelectedCompany] = useState<string>("microsoft");
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    country: "",
    zipCode: "",
    testingCentre1: "",
    testingCentre2: "",
    dateMM: "",
    dateDD: "",
    dateYYYY: "",
    timeHH: "",
    timeMM: "",
    timeAMPM: "AM",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.country) newErrors.country = "Please select a country";
    if (!formData.zipCode) newErrors.zipCode = "Please select a zip code";
    if (!formData.testingCentre1)
      newErrors.testingCentre1 = "Please select a testing centre";
    if (!formData.testingCentre2)
      newErrors.testingCentre2 = "Please select a testing centre";
    if (!formData.dateMM || !formData.dateDD || !formData.dateYYYY)
      newErrors.date = "Please select a valid date";
    if (!formData.timeHH || !formData.timeMM)
      newErrors.time = "Please select a valid time";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setShowThankYou(true);
    }
  };

  const closeThankYou = () => {
    setShowThankYou(false);
  };

  return (
    <div className="text-white relative">
      <h1 className="text-3xl font-semibold text-center mb-2">
        Schedule Assessment
      </h1>
      <p className="text-center text-gray-200 mb-6">
        Register for your preferred skill assessment slot
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Message */}
        <p className="text-center text-base sm:text-lg bg-white/5 rounded-lg p-4 border border-white/10">
          Great!! multiple employers have authorised you to take a skill
          assessment with SkillKwiz. Choose one. You can revisit this page to
          schedule for others
        </p>

        {/* Company Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { id: "microsoft", label: "Microsoft" },
            { id: "google", label: "Google" },
            { id: "amazon", label: "Amazon" },
          ].map((company) => (
            <button
              key={company.id}
              type="button"
              className={`flex items-center justify-center gap-2 bg-white/10 border rounded-lg px-4 py-3 text-white hover:bg-white/20 transition-all duration-200 font-medium ${
                selectedCompany === company.id
                  ? "border-green-400 bg-green-500/20"
                  : "border-white/20"
              }`}
              onClick={() => setSelectedCompany(company.id)}
            >
              <span
                className={`w-4 h-4 rounded-full ${
                  selectedCompany === company.id
                    ? "bg-green-400"
                    : "bg-gray-400"
                }`}
              ></span>
              {company.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { id: "facebook1", label: "Facebook" },
            { id: "facebook2", label: "Facebook" },
          ].map((company) => (
            <button
              key={company.id}
              type="button"
              className={`flex items-center justify-center gap-2 bg-white/10 border rounded-lg px-4 py-3 text-white hover:bg-white/20 transition-all duration-200 font-medium ${
                selectedCompany === company.id
                  ? "border-green-400 bg-green-500/20"
                  : "border-white/20"
              }`}
              onClick={() => setSelectedCompany(company.id)}
            >
              <span
                className={`w-4 h-4 rounded-full ${
                  selectedCompany === company.id
                    ? "bg-green-400"
                    : "bg-gray-400"
                }`}
              ></span>
              {company.label}
            </button>
          ))}
        </div>

        {/* Info Box */}
        <div className="bg-[#2d5184]/80 rounded-xl p-4 sm:p-5 flex items-start gap-3 border border-blue-400/20">
          <Info className="w-6 h-6 text-[#f6c648] mt-0.5 flex-shrink-0" />
          <p className="text-sm sm:text-base leading-relaxed">
            <span className="font-semibold capitalize">{selectedCompany}</span>{" "}
            has authorized you to take an assessment for C#, SQL Server,
            Web2.0, and React.
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium">
              Select Country
            </label>
            <div className="relative">
              <select
                className={`w-full bg-white/10 border rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#f6c648] transition-all ${
                  errors.country ? "border-red-400" : "border-white/20"
                }`}
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
              >
                <option value="" className="bg-[#1a2b4a]">
                  Select Country
                </option>
                <option value="india" className="bg-[#1a2b4a]">
                  India
                </option>
                <option value="usa" className="bg-[#1a2b4a]">
                  United States
                </option>
                <option value="uk" className="bg-[#1a2b4a]">
                  United Kingdom
                </option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-white/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
            {errors.country && (
              <p className="mt-1 text-red-300 text-xs">{errors.country}</p>
            )}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Select Zip Code
            </label>
            <div className="relative">
              <select
                className={`w-full bg-white/10 border rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#f6c648] transition-all ${
                  errors.zipCode ? "border-red-400" : "border-white/20"
                }`}
                value={formData.zipCode}
                onChange={(e) =>
                  setFormData({ ...formData, zipCode: e.target.value })
                }
              >
                <option value="" className="bg-[#1a2b4a]">
                  Enter your area&apos;s Zip code
                </option>
                <option value="110001" className="bg-[#1a2b4a]">
                  110001
                </option>
                <option value="110002" className="bg-[#1a2b4a]">
                  110002
                </option>
                <option value="560001" className="bg-[#1a2b4a]">
                  560001
                </option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-white/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
            {errors.zipCode && (
              <p className="mt-1 text-red-300 text-xs">{errors.zipCode}</p>
            )}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Select Testing Centre
            </label>
            <div className="relative">
              <select
                className={`w-full bg-white/10 border rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#f6c648] transition-all ${
                  errors.testingCentre1
                    ? "border-red-400"
                    : "border-white/20"
                }`}
                value={formData.testingCentre1}
                onChange={(e) =>
                  setFormData({ ...formData, testingCentre1: e.target.value })
                }
              >
                <option value="" className="bg-[#1a2b4a]">
                  Enter your Centre
                </option>
                <option value="centre1" className="bg-[#1a2b4a]">
                  SkillKwiz Center - Brigade Road
                </option>
                <option value="centre2" className="bg-[#1a2b4a]">
                  SkillKwiz Center - Koramangala
                </option>
                <option value="centre3" className="bg-[#1a2b4a]">
                  SkillKwiz Center - Indiranagar
                </option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-white/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
            {errors.testingCentre1 && (
              <p className="mt-1 text-red-300 text-xs">
                {errors.testingCentre1}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Select Testing Centre
            </label>
            <div className="relative">
              <select
                className={`w-full bg-white/10 border rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#f6c648] transition-all ${
                  errors.testingCentre2
                    ? "border-red-400"
                    : "border-white/20"
                }`}
                value={formData.testingCentre2}
                onChange={(e) =>
                  setFormData({ ...formData, testingCentre2: e.target.value })
                }
              >
                <option value="" className="bg-[#1a2b4a]">
                  Enter your Centre
                </option>
                <option value="centre1" className="bg-[#1a2b4a]">
                  SkillKwiz Center - Brigade Road
                </option>
                <option value="centre2" className="bg-[#1a2b4a]">
                  SkillKwiz Center - Koramangala
                </option>
                <option value="centre3" className="bg-[#1a2b4a]">
                  SkillKwiz Center - Indiranagar
                </option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-white/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
            {errors.testingCentre2 && (
              <p className="mt-1 text-red-300 text-xs">
                {errors.testingCentre2}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-sm font-medium">
                Select a Date
              </label>
              <div
                className={`flex items-center bg-white/10 border rounded-lg px-4 py-3 text-white transition-all ${
                  errors.date ? "border-red-400" : "border-white/20 focus-within:ring-2 focus-within:ring-[#f6c648]"
                }`}
              >
                <input
                  type="text"
                  placeholder="MM"
                  maxLength={2}
                  value={formData.dateMM}
                  onChange={(e) =>
                    setFormData({ ...formData, dateMM: e.target.value })
                  }
                  className="w-12 bg-transparent focus:outline-none text-center placeholder-white/50"
                />
                <span className="mx-1 text-white/40">|</span>
                <input
                  type="text"
                  placeholder="DD"
                  maxLength={2}
                  value={formData.dateDD}
                  onChange={(e) =>
                    setFormData({ ...formData, dateDD: e.target.value })
                  }
                  className="w-12 bg-transparent focus:outline-none text-center placeholder-white/50"
                />
                <span className="mx-1 text-white/40">|</span>
                <input
                  type="text"
                  placeholder="YYYY"
                  maxLength={4}
                  value={formData.dateYYYY}
                  onChange={(e) =>
                    setFormData({ ...formData, dateYYYY: e.target.value })
                  }
                  className="w-16 bg-transparent focus:outline-none text-center placeholder-white/50"
                />
                <Calendar className="ml-auto w-5 h-5 text-white/50" />
              </div>
              {errors.date && (
                <p className="mt-1 text-red-300 text-xs">{errors.date}</p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Select Time
              </label>
              <div
                className={`flex items-center bg-white/10 border rounded-lg px-4 py-3 text-white transition-all ${
                  errors.time ? "border-red-400" : "border-white/20 focus-within:ring-2 focus-within:ring-[#f6c648]"
                }`}
              >
                <input
                  type="text"
                  placeholder="03"
                  maxLength={2}
                  value={formData.timeHH}
                  onChange={(e) =>
                    setFormData({ ...formData, timeHH: e.target.value })
                  }
                  className="w-12 bg-transparent focus:outline-none text-center placeholder-white/50"
                />
                <span className="mx-1 text-white/40">|</span>
                <input
                  type="text"
                  placeholder="35"
                  maxLength={2}
                  value={formData.timeMM}
                  onChange={(e) =>
                    setFormData({ ...formData, timeMM: e.target.value })
                  }
                  className="w-12 bg-transparent focus:outline-none text-center placeholder-white/50"
                />
                <span className="mx-1 text-white/40">|</span>
                <input
                  type="text"
                  placeholder="AM"
                  maxLength={2}
                  value={formData.timeAMPM}
                  onChange={(e) =>
                    setFormData({ ...formData, timeAMPM: e.target.value.toUpperCase() })
                  }
                  className="w-12 bg-transparent focus:outline-none text-center placeholder-white/50 uppercase"
                />
                <Clock className="ml-auto w-5 h-5 text-white/50" />
              </div>
              {errors.time && (
                <p className="mt-1 text-red-300 text-xs">{errors.time}</p>
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="px-12 sm:px-20 py-3 rounded-lg bg-gradient-to-r from-[#4ECDC4] to-[#2d8a84] text-white hover:opacity-90 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl text-base"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Thank You Modal / Popup */}
      {showThankYou && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={closeThankYou}
        >
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal Content */}
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 text-center transform animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeThankYou}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-1.5 rounded-full transition-colors duration-200 z-10"
              aria-label="Close popup"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Success Icon */}
            <div className="flex justify-center mb-5 sm:mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-green-500/10 flex items-center justify-center animate-pulse">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-12 h-12 sm:w-14 sm:h-14 text-green-500" />
                </div>
              </div>
            </div>

            {/* Content */}
            <h2 className="text-2xl sm:text-3xl font-bold text-[#00418d] mb-3">
              Thank You!
            </h2>
            <p className="text-gray-600 mb-2 sm:mb-3 text-base sm:text-lg">
              Your assessment has been scheduled successfully.
            </p>
            <p className="text-gray-500 mb-6 sm:mb-8 text-sm">
              We have sent a confirmation email with all the details. Please
              arrive 15 minutes before your scheduled time at the testing
              center.
            </p>

            {/* Close Button */}
            <button
              onClick={closeThankYou}
              className="w-full bg-[#00418d] text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-[#003366] transition-all duration-200 shadow-md hover:shadow-lg text-base"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
