"use server";

import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password must be at least 1 characters"),
});

export async function loginAdminAction(prevState, formData) {
  // Validate the form data
  const validatedFields = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.errors[0].message,
      success: false,
    };
  }

  const { email, password } = validatedFields.data;

  try {
    const res = await fetch(`${process.env.API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      return {
        error: data.message || "Invalid credentials",
        success: false,
      };
    }

    if (data.data?.user?.role !== "admin") {
      return {
        error: "Invalid credentials",
        success: false,
      };
    }

    return {
      success: true,
      token: data.data.token, // Extracting the token
      user: data.data.user, // Extracting the user information
    };
  } catch (err) {
    return {
      error: "Network error. Please try again.",
      success: false,
    };
  }
}
