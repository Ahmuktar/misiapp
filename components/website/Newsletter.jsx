"use client";
import React, { useState } from "react";
import { Mail, ArrowRight, Check } from "lucide-react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState(""); // 'success' | 'error' | ''

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !agreed) return;

    // Mock submission
    setStatus("success");
    setEmail("");
    setAgreed(false);
  };

  return (
    <div className="w-full max-w-md bg-transparent rounded-lg">
      <p className="mb-4 text-sm text-white">
        Sign up for our newsletter and get 10% off your first purchase
      </p>

      {status === "success" && (
        <div className="mb-4 p-3 bg-green-50 text-green-700 text-sm rounded-md flex items-center gap-2">
          <Check className="w-4 h-4" />
          Your subscription has been successful!
        </div>
      )}

      {status === "error" && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-md">
          Subscription failed. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            required
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-white rounded-md hover:bg-main disabled:opacity-50"
            disabled={!email || !agreed}
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="terms"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
          />
          <label htmlFor="terms" className="text-xs text-white">
            By subscribing, you agree to our{" "}
            <a href="#" className="text-primary hover:text-primary">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-primary hover:text-primary">
              Privacy Policy
            </a>
          </label>
        </div>
      </form>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-xs text-white">
            <span className="w-1 h-1 bg-white rounded-full"></span>
            <span>Exclusive offers and updates</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-white">
            <span className="w-1 h-1 bg-white rounded-full"></span>
            <span>No spam, unsubscribe anytime</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
