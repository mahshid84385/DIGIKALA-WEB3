import BASE_URL from "./api";

export async function getBrands() {
  const response = await fetch(`${BASE_URL}/api/brands`);

  if (!response.ok) {
    throw new Error("Brands API Error");
  }

  return await response.json();
}