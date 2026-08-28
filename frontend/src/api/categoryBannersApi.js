import BASE_URL from "./api";

export async function getCategoryBanners() {
  const response = await fetch(`${BASE_URL}/api/category-banners`);

  if (!response.ok) {
    throw new Error("Category Banners API Error");
  }

  return await response.json();
}