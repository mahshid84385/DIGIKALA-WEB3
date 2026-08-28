const BASE_URL = "http://localhost:3000";

export async function getCategories() {
  const response = await fetch(`${BASE_URL}/api/categories`);

  if (!response.ok) {
    throw new Error("Categories API Error");
  }

  return await response.json();
}