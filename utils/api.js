const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost/misibackend"
    : "https://api.misi.ng";

export const fetchProducts = async (limit = 4) => {
  try {
    const response = await fetch(`${API_URL}/products?limit=${limit}`);
    const data = await response.json();
    if (data.status === "success") {
      return data;
    } else {
      console.error("Failed to fetch products:", data.message);
      return [];
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const fetchAllProducts = async (filter) => {
  try {
    const url = new URLSearchParams();

    console.log(url.getAll);
    const response = await fetch(`${API_URL}/products?${filter.toString()}`);
    const data = await response.json();
    if (data.status === "success") {
      return data;
    } else {
      console.error("Failed to fetch products:", data.message);
      return [];
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const fetchAllBlogs = async () => {
  try {
    const response = await fetch(`${API_URL}/blog`);
    const data = await response.json();
    if (data.status === "success") {
      return data;
    } else {
      console.error("Failed to fetch products:", data.message);
      return [];
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
