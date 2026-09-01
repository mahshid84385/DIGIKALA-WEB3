import { getPromotionalBanners } from "../../api/promotionalBannersApi";
import PromotionalBanners from "./PromotionalBanners";

export default async function PromotionalBannersContainer() {
  const data = await getPromotionalBanners();

  return PromotionalBanners(data);
}