import { getBrands } from "../../api/brandsApi";
import Brands from "./Brands";

export default async function BrandsContainer() {
  const data = await getBrands();

  return Brands(data);
}