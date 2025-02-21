"use client";

import { useActionState, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { loginAdminAction } from "@/actions/auth.actions";
import { useFormStatus } from "react-dom";

// Submit Button Component with Loading State
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="text-white flex items-center justify-center w-full bg-main focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm dark:bg-primary-600 dark:focus:ring-primary-800 disabled:opacity-70"
    >
      {pending ? "Signing in..." : "Sign in"}
    </button>
  );
}

export default function AdminLogin() {
  const router = useRouter();
  const [state, formAction] = useActionState(loginAdminAction, {
    error: null,
    success: null,
  });

  useEffect(() => {
    if (state?.success) {
      // Store token in sessionStorage
      if (state.token) {
        sessionStorage.setItem("SESSID", state.token);
        sessionStorage.setItem("UID", JSON.stringify(state.user));
      }

      // Redirect to dashboard
      router.push("/admin/dashboard");
    }
  }, [state, router]);

  return (
    <section className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center px-6 py-8 w-full lg:py-0">
        <Link
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-white"
        >
          <Image
            className="w-20 h-20 mr-2"
            src="/assets/images/logo/logo.png"
            alt="logo"
            height={100}
            width={100}
          />
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4">
            {/* Show Error Message */}
            {state?.error && (
              <div
                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400"
                role="alert"
              >
                {state.error}
              </div>
            )}

            <form className="space-y-4 md:space-y-6" action={formAction}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              {/* Forgot Password Link */}
              <div className="flex items-center justify-end">
                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </Link>
              </div>

              <SubmitButton />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
