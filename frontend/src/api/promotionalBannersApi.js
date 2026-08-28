import BASE_URL from "./api";

export async function getPromotionalBanners() {
  const response = await fetch(`${BASE_URL}/api/promotional-banners`);

  if (!response.ok) {
    throw new Error("Promotional Banners API Error");
  }

  return await response.json();
}