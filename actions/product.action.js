export async function getProducts(page = 1, perPage = 10) {
  try {
    const response = await fetch(
      `http://localhost/misibackend/products?page=${page}&limit=${perPage}`
    );
    const data = await response.json();
    if (data.status === "success") {
      return JSON.stringify(data.data);
    }
  } catch (error) {
    console.error("Error fetching product:", error);
  }
}
