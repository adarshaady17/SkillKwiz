"use client";
import { useState } from "react";
import Image from "next/image";
import { Mail, Lock, Eye, EyeOff, User, Phone } from "lucide-react";

export default function LoginSection() {
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [signinForm, setSigninForm] = useState({ email: "", password: "" });
  const [signupForm, setSignupForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateSignin = () => {
    const newErrors: Record<string, string> = {};
    if (!signinForm.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(signinForm.email))
      newErrors.email = "Invalid email address";
    if (!signinForm.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateSignup = () => {
    const newErrors: Record<string, string> = {};
    if (!signupForm.firstName) newErrors.firstName = "First name is required";
    if (!signupForm.lastName) newErrors.lastName = "Last name is required";
    if (!signupForm.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(signupForm.email))
      newErrors.email = "Invalid email address";
    if (!signupForm.phone) newErrors.phone = "Phone number is required";
    if (!signupForm.password) newErrors.password = "Password is required";
    else if (signupForm.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (signupForm.password !== signupForm.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSigninSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateSignin()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateSignup()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setActiveTab("signin");
        setSignupForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
        });
      }, 3000);
    }
  };

  return (
    <section className="bg-[#000c2a] py-12 sm:py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          {/* Left side - Light professional image */}
          <div className="w-full md:w-1/2 relative bg-gradient-to-br from-blue-50 via-white to-[#fff3cd] min-h-[350px] md:min-h-0">
            <div className="absolute inset-0 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="relative w-80 h-20 flex items-center justify-center">
                    <Image
                      src="/skillkwiz-logo.svg"
                      alt="SkillKwiz Logo"
                      fill
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-[#00418d] mb-3 leading-tight">
                  Unlock Your
                  <br />
                  Hiring Potential
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Join thousands of companies using SkillKwiz to assess,
                  verify, and hire the best talent with confidence.
                </p>
              </div>

              {/* Light illustration / image */}
              <div className="relative w-full h-48 sm:h-56 md:h-48 lg:h-56 mt-6">
                <Image
                  src="/images/homepage/skills_5.png"
                  alt="Skill Assessment Platform"
                  fill
                  className="object-contain w-full h-full rounded-lg"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-[#00418d] font-medium">
                    10,000+ Assessments
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-yellow-50 px-3 py-1.5 rounded-full">
                  <div className="w-2 h-2 bg-[#f6c648] rounded-full"></div>
                  <span className="text-xs text-[#00418d] font-medium">
                    Secure & Verified
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Auth Form with Tabs */}
          <div className="w-full md:w-1/2 bg-gradient-to-br from-[#00418d] to-[#0066cc] p-6 sm:p-8 md:p-10">
            {/* Tabs */}
            <div className="flex mb-6 sm:mb-8 bg-white/10 rounded-lg p-1">
              <button
                onClick={() => {
                  setActiveTab("signin");
                  setErrors({});
                  setSubmitted(false);
                }}
                className={`flex-1 py-2.5 rounded-md text-sm sm:text-base font-semibold transition-all duration-300 ${
                  activeTab === "signin"
                    ? "bg-white text-[#00418d] shadow-md"
                    : "text-white/80 hover:text-white"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setActiveTab("signup");
                  setErrors({});
                  setSubmitted(false);
                }}
                className={`flex-1 py-2.5 rounded-md text-sm sm:text-base font-semibold transition-all duration-300 ${
                  activeTab === "signup"
                    ? "bg-white text-[#00418d] shadow-md"
                    : "text-white/80 hover:text-white"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Success Message */}
            {submitted && (
              <div className="mb-4 p-3 bg-green-500/20 border border-green-400/40 rounded-lg text-green-200 text-sm text-center font-medium">
                {activeTab === "signin"
                  ? "Signed in successfully!"
                  : "Account created! Redirecting to Sign In..."}
              </div>
            )}

            {/* Sign In Form */}
            {activeTab === "signin" ? (
              <form onSubmit={handleSigninSubmit} className="space-y-4 sm:space-y-5">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  Welcome Back!
                </h2>
                <p className="text-blue-200 text-sm mb-4">
                  Sign in to your SkillKwiz account
                </p>

                <div>
                  <label
                    htmlFor="signin-email"
                    className="block text-white text-sm font-medium mb-1.5"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300" />
                    </div>
                    <input
                      id="signin-email"
                      type="email"
                      value={signinForm.email}
                      onChange={(e) =>
                        setSigninForm({ ...signinForm, email: e.target.value })
                      }
                      placeholder="Enter your email"
                      className={`w-full bg-white/10 border rounded-lg pl-10 pr-4 py-2.5 sm:py-3 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-[#f6c648] text-sm sm:text-base transition-all ${
                        errors.email
                          ? "border-red-400"
                          : "border-white/20 focus:border-[#f6c648]"
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-red-300 text-xs">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="signin-password"
                    className="block text-white text-sm font-medium mb-1.5"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300" />
                    </div>
                    <input
                      id="signin-password"
                      type={showPassword ? "text" : "password"}
                      value={signinForm.password}
                      onChange={(e) =>
                        setSigninForm({
                          ...signinForm,
                          password: e.target.value,
                        })
                      }
                      placeholder="Enter your password"
                      className={`w-full bg-white/10 border rounded-lg pl-10 pr-12 py-2.5 sm:py-3 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-[#f6c648] text-sm sm:text-base transition-all ${
                        errors.password
                          ? "border-red-400"
                          : "border-white/20 focus:border-[#f6c648]"
                      }`}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-3"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300" />
                      ) : (
                        <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-red-300 text-xs">{errors.password}</p>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center text-white/90 cursor-pointer">
                    <input
                      type="checkbox"
                      className="h-4 w-4 mr-2 rounded border-white/30 text-[#f73e5d] focus:ring-[#f6c648]"
                    />
                    Remember me
                  </label>
                  <a href="#" className="text-[#f6c648] hover:underline">
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#f73e5d] hover:bg-[#e83552] text-white py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  Sign In
                </button>

                <div className="text-center text-white/80 text-sm">
                  <p className="mb-3">— Or Login with —</p>
                  <div className="flex justify-center space-x-4">
                    <button
                      type="button"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md"
                      aria-label="Sign in with Google"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md"
                      aria-label="Sign in with Apple"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.05 12.53c0 1.49-.56 2.9-1.56 3.94-.99 1.04-2.3 1.67-3.72 1.67-1.41 0-2.71-.62-3.7-1.67-.99-1.04-1.56-2.45-1.57-3.94 0-1.49.57-2.91 1.56-3.95.99-1.04 2.3-1.67 3.71-1.67 1.42 0 2.73.63 3.72 1.67 1 .04 1.56 2.46 1.56 3.95z"
                          fill="black"
                        />
                        <path
                          d="M13.38 3.5c.55-.61.92-1.43.99-2.32-.96.04-2.12.64-2.8 1.35-.57.6-.97 1.45-1.02 2.34 1.09.08 2.27-.55 2.83-1.37z"
                          fill="black"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="text-center text-blue-200 text-sm pt-2 border-t border-white/10 mt-4">
                  <p>
                    Don&apos;t have an account?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setActiveTab("signup");
                        setErrors({});
                      }}
                      className="text-[#f6c648] hover:underline font-semibold"
                    >
                      Sign Up
                    </button>
                  </p>
                </div>
              </form>
            ) : (
              /* Sign Up Form */
              <form onSubmit={handleSignupSubmit} className="space-y-3 sm:space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  Create Account
                </h2>
                <p className="text-blue-200 text-sm mb-4">
                  Join SkillKwiz today and start your journey
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="signup-first"
                      className="block text-white text-sm font-medium mb-1.5"
                    >
                      First Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <User className="w-4 h-4 text-blue-300" />
                      </div>
                      <input
                        id="signup-first"
                        type="text"
                        value={signupForm.firstName}
                        onChange={(e) =>
                          setSignupForm({
                            ...signupForm,
                            firstName: e.target.value,
                          })
                        }
                        placeholder="First name"
                        className={`w-full bg-white/10 border rounded-lg pl-9 pr-3 py-2.5 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-[#f6c648] text-sm transition-all ${
                          errors.firstName
                            ? "border-red-400"
                            : "border-white/20 focus:border-[#f6c648]"
                        }`}
                      />
                    </div>
                    {errors.firstName && (
                      <p className="mt-1 text-red-300 text-xs">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="signup-last"
                      className="block text-white text-sm font-medium mb-1.5"
                    >
                      Last Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <User className="w-4 h-4 text-blue-300" />
                      </div>
                      <input
                        id="signup-last"
                        type="text"
                        value={signupForm.lastName}
                        onChange={(e) =>
                          setSignupForm({
                            ...signupForm,
                            lastName: e.target.value,
                          })
                        }
                        placeholder="Last name"
                        className={`w-full bg-white/10 border rounded-lg pl-9 pr-3 py-2.5 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-[#f6c648] text-sm transition-all ${
                          errors.lastName
                            ? "border-red-400"
                            : "border-white/20 focus:border-[#f6c648]"
                        }`}
                      />
                    </div>
                    {errors.lastName && (
                      <p className="mt-1 text-red-300 text-xs">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="signup-email"
                    className="block text-white text-sm font-medium mb-1.5"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300" />
                    </div>
                    <input
                      id="signup-email"
                      type="email"
                      value={signupForm.email}
                      onChange={(e) =>
                        setSignupForm({ ...signupForm, email: e.target.value })
                      }
                      placeholder="Enter your email"
                      className={`w-full bg-white/10 border rounded-lg pl-10 pr-4 py-2.5 sm:py-3 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-[#f6c648] text-sm sm:text-base transition-all ${
                        errors.email
                          ? "border-red-400"
                          : "border-white/20 focus:border-[#f6c648]"
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-red-300 text-xs">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="signup-phone"
                    className="block text-white text-sm font-medium mb-1.5"
                  >
                    Phone
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300" />
                    </div>
                    <input
                      id="signup-phone"
                      type="tel"
                      value={signupForm.phone}
                      onChange={(e) =>
                        setSignupForm({ ...signupForm, phone: e.target.value })
                      }
                      placeholder="Enter your phone number"
                      className={`w-full bg-white/10 border rounded-lg pl-10 pr-4 py-2.5 sm:py-3 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-[#f6c648] text-sm sm:text-base transition-all ${
                        errors.phone
                          ? "border-red-400"
                          : "border-white/20 focus:border-[#f6c648]"
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-red-300 text-xs">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="signup-password"
                    className="block text-white text-sm font-medium mb-1.5"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300" />
                    </div>
                    <input
                      id="signup-password"
                      type={showPassword ? "text" : "password"}
                      value={signupForm.password}
                      onChange={(e) =>
                        setSignupForm({
                          ...signupForm,
                          password: e.target.value,
                        })
                      }
                      placeholder="Create a password"
                      className={`w-full bg-white/10 border rounded-lg pl-10 pr-12 py-2.5 sm:py-3 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-[#f6c648] text-sm sm:text-base transition-all ${
                        errors.password
                          ? "border-red-400"
                          : "border-white/20 focus:border-[#f6c648]"
                      }`}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-3"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300" />
                      ) : (
                        <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-red-300 text-xs">{errors.password}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="signup-confirm"
                    className="block text-white text-sm font-medium mb-1.5"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300" />
                    </div>
                    <input
                      id="signup-confirm"
                      type={showConfirmPassword ? "text" : "password"}
                      value={signupForm.confirmPassword}
                      onChange={(e) =>
                        setSignupForm({
                          ...signupForm,
                          confirmPassword: e.target.value,
                        })
                      }
                      placeholder="Confirm your password"
                      className={`w-full bg-white/10 border rounded-lg pl-10 pr-12 py-2.5 sm:py-3 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-[#f6c648] text-sm sm:text-base transition-all ${
                        errors.confirmPassword
                          ? "border-red-400"
                          : "border-white/20 focus:border-[#f6c648]"
                      }`}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-3"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      aria-label={
                        showConfirmPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300" />
                      ) : (
                        <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300" />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="mt-1 text-red-300 text-xs">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#f73e5d] hover:bg-[#e83552] text-white py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base mt-2"
                >
                  Create Account
                </button>

                <div className="text-center text-blue-200 text-sm pt-2 border-t border-white/10 mt-3">
                  <p>
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setActiveTab("signin");
                        setErrors({});
                      }}
                      className="text-[#f6c648] hover:underline font-semibold"
                    >
                      Sign In
                    </button>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
