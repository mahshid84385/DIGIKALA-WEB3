import { getCategoryBanners } from "../../api/categoryBannersApi";
import CategoryBanners from "./CategoryBanners";

export default async function CategoryBannersContainer() {
  const data = await getCategoryBanners();

  return CategoryBanners(data);
}