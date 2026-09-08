"use client";

import type React from "react";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, User, Phone } from "lucide-react";

interface LoginFormProps {
  onLogin: (userType: "employer" | "employee") => void;
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [userType, setUserType] = useState<"employer" | "employee">("employee");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateSignIn = () => {
    const newErrors: Record<string, string> = {};
    if (!email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Invalid email format";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateSignUp = () => {
    const newErrors: Record<string, string> = {};
    if (!firstName) newErrors.firstName = "First name is required";
    if (!lastName) newErrors.lastName = "Last name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Invalid email format";
    if (!phone) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(phone.replace(/\D/g, "")))
      newErrors.phone = "Enter a valid 10-digit phone number";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";
    else if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateSignIn()) {
      setErrors({});
      onLogin(userType);
    }
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateSignUp()) {
      setErrors({});
      onLogin(userType);
    }
  };

  const switchToSignIn = (e: React.MouseEvent) => {
    e.preventDefault();
    setErrors({});
    setActiveTab("signin");
  };

  const switchToSignUp = (e: React.MouseEvent) => {
    e.preventDefault();
    setErrors({});
    setActiveTab("signup");
  };

  return (
    <div className="text-white">
      <h1 className="text-3xl font-semibold text-center mb-2">
        {activeTab === "signin" ? "Login" : "Create Account"}
      </h1>
      <p className="text-center text-gray-300 mb-6">
        {activeTab === "signin"
          ? "Sign in to access your account"
          : "Join SkillKwiz to start your journey"}
      </p>

      {/* Tabs */}
      <div className="flex rounded-lg bg-white/10 p-1 mb-6">
        <button
          type="button"
          onClick={switchToSignIn}
          className={`flex-1 py-2.5 px-4 rounded-md font-medium transition-all duration-200 ${
            activeTab === "signin"
              ? "bg-gradient-to-r from-[#4ECDC4] to-[#2d8a84] text-white shadow"
              : "text-gray-300 hover:text-white"
          }`}
        >
          Sign In
        </button>
        <button
          type="button"
          onClick={switchToSignUp}
          className={`flex-1 py-2.5 px-4 rounded-md font-medium transition-all duration-200 ${
            activeTab === "signup"
              ? "bg-gradient-to-r from-[#4ECDC4] to-[#2d8a84] text-white shadow"
              : "text-gray-300 hover:text-white"
          }`}
        >
          Sign Up
        </button>
      </div>

      {/* User Type Selection */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button
          type="button"
          onClick={() => setUserType("employee")}
          className={`flex items-center justify-center py-3 px-4 rounded-md text-white transition-all duration-200 font-medium ${
            userType === "employee"
              ? "bg-gradient-to-r from-blue-500 to-blue-600 shadow-md"
              : "bg-gradient-to-r from-gray-500/80 to-gray-600/80 hover:from-gray-500 hover:to-gray-600"
          }`}
        >
          <span className="mr-2">👤</span> Employee
        </button>
        <button
          type="button"
          onClick={() => setUserType("employer")}
          className={`flex items-center justify-center py-3 px-4 rounded-md text-white transition-all duration-200 font-medium ${
            userType === "employer"
              ? "bg-gradient-to-r from-blue-500 to-blue-600 shadow-md"
              : "bg-gradient-to-r from-gray-500/80 to-gray-600/80 hover:from-gray-500 hover:to-gray-600"
          }`}
        >
          <span className="mr-2">🏢</span> Employer
        </button>
      </div>

      {activeTab === "signin" ? (
        <form onSubmit={handleSignIn} className="space-y-5">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Mail className="w-5 h-5 text-gray-400" />
              </div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={`w-full bg-[#333333] rounded pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] transition-all ${
                  errors.email ? "ring-2 ring-red-400" : ""
                }`}
                required
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-red-300 text-xs">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Lock className="w-5 h-5 text-gray-400" />
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className={`w-full bg-[#333333] rounded pl-10 pr-10 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] transition-all ${
                  errors.password ? "ring-2 ring-red-400" : ""
                }`}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 hover:text-white transition-colors"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5 text-gray-400" />
                ) : (
                  <Eye className="w-5 h-5 text-gray-400" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-red-300 text-xs">{errors.password}</p>
            )}
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-md bg-gradient-to-r from-[#4ECDC4] to-[#2d8a84] text-white hover:opacity-90 font-semibold shadow-md hover:shadow-lg transition-all duration-200"
          >
            Login
          </button>

          {/* Sign Up Link */}
          <div className="text-center pt-2">
            <p className="text-gray-300 text-sm">
              Don&apos;t have an account?{" "}
              <button
                type="button"
                onClick={switchToSignUp}
                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                Sign Up
              </button>
            </p>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSignUp} className="space-y-4">
          {/* Name Row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium"
              >
                First Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <User className="w-4 h-4 text-gray-400" />
                </div>
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First"
                  className={`w-full bg-[#333333] rounded pl-9 pr-3 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] transition-all text-sm ${
                    errors.firstName ? "ring-2 ring-red-400" : ""
                  }`}
                  required
                />
              </div>
              {errors.firstName && (
                <p className="mt-1 text-red-300 text-xs">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium"
              >
                Last Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <User className="w-4 h-4 text-gray-400" />
                </div>
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last"
                  className={`w-full bg-[#333333] rounded pl-9 pr-3 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] transition-all text-sm ${
                    errors.lastName ? "ring-2 ring-red-400" : ""
                  }`}
                  required
                />
              </div>
              {errors.lastName && (
                <p className="mt-1 text-red-300 text-xs">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email2" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Mail className="w-5 h-5 text-gray-400" />
              </div>
              <input
                id="email2"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={`w-full bg-[#333333] rounded pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] transition-all ${
                  errors.email ? "ring-2 ring-red-400" : ""
                }`}
                required
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-red-300 text-xs">{errors.email}</p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium">
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Phone className="w-5 h-5 text-gray-400" />
              </div>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                className={`w-full bg-[#333333] rounded pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] transition-all ${
                  errors.phone ? "ring-2 ring-red-400" : ""
                }`}
                required
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-red-300 text-xs">{errors.phone}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password2"
              className="block mb-2 text-sm font-medium"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Lock className="w-5 h-5 text-gray-400" />
              </div>
              <input
                id="password2"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                className={`w-full bg-[#333333] rounded pl-10 pr-10 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] transition-all ${
                  errors.password ? "ring-2 ring-red-400" : ""
                }`}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 hover:text-white transition-colors"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5 text-gray-400" />
                ) : (
                  <Eye className="w-5 h-5 text-gray-400" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-red-300 text-xs">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium"
            >
              Confirm Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Lock className="w-5 h-5 text-gray-400" />
              </div>
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter password"
                className={`w-full bg-[#333333] rounded pl-10 pr-10 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] transition-all ${
                  errors.confirmPassword ? "ring-2 ring-red-400" : ""
                }`}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 hover:text-white transition-colors"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-5 h-5 text-gray-400" />
                ) : (
                  <Eye className="w-5 h-5 text-gray-400" />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-red-300 text-xs">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-md bg-gradient-to-r from-[#4ECDC4] to-[#2d8a84] text-white hover:opacity-90 font-semibold shadow-md hover:shadow-lg transition-all duration-200 mt-1"
          >
            Create Account
          </button>

          {/* Sign In Link */}
          <div className="text-center pt-2">
            <p className="text-gray-300 text-sm">
              Already have an account?{" "}
              <button
                type="button"
                onClick={switchToSignIn}
                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                Sign In
              </button>
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
