import { create } from "zustand";
import Cookies from "js-cookie";

export const useAuth = create((set, get) => ({
  user: JSON.parse(Cookies.get("authData") || "null"),
  token: Cookies.get("authToken") || null,
  loading: false,
  error: null,

  setUser: (user) => {
    set({ user });
    Cookies.set("authData", JSON.stringify(user), { expires: 7 });
  },

  setToken: (token) => {
    set({ token });
    Cookies.set("authToken", token, { expires: 7 });
  },

  clearUser: () => {
    set({ user: null, token: null });
    Cookies.remove("authData");
    Cookies.remove("authToken");
  },

  fetchUser: async () => {
    set({ loading: true, error: null });
    try {
      const token = get().token;
      if (!token) {
        throw new Error("No token found");
      }

      const response = await fetch(`${NEXT_PUBLIC_API_URL}/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          get().clearUser();
          throw new Error("Session expired. Please log in again.");
        }
        throw new Error("Failed to fetch user data");
      }

      const data = await response.json();
      set({ user: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
      console.error("Error fetching user:", error);
    }
  },

  isLoggedIn: () => {
    const state = get();
    return !!(state.user && state.token);
  },
}));
