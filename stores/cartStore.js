import { create } from "zustand";
import { useAuth } from "./useAuth";

const useCartStore = create((set, get) => ({
  cartItems: [],
  loading: false,
  error: null,

  // Fetch cart items from your API
  fetchCartItems: async () => {
    const { token } = useAuth.getState();
    set({ loading: true, error: null });
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data.status === "success") {
        set({
          cartItems: data.data,
          loading: false,
        });
      }
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Add item to cart using your API
  addToCart: async (product) => {
    const { token } = useAuth.getState();
    set({ loading: true, error: null });
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(product),
      });
      const data = await response.json();
      set((state) => ({
        cartItems: [...state.cartItems, data],
        loading: false,
      }));
      await get().fetchCartItems(); // Fetch cart items after adding
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Remove item from cart using your API
  removeFromCart: async (cartId) => {
    const { token } = useAuth.getState();
    set({ loading: true, error: null });
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart/${cartId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      //   set((state) => ({
      //     cartItems: state.cartItems.filter((item) => item.id !== cartId),
      //     loading: false,
      //   }));
      await get().fetchCartItems(); // Fetch cart items after removing
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Clear cart using your API
  clearCart: async () => {
    set({ loading: true, error: null });
    try {
      await fetch("/api/cart/clear", { method: "DELETE" });
      set({ cartItems: [], loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

const calculateTotalPrice = (cartItems) => {
  return cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

export default useCartStore;
