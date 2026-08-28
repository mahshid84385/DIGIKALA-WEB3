import { getCategories } from "../../api/categoriesApi";
import Categories from "./Categories";

export default async function CategoriesContainer() {
  const data = await getCategories();

  return Categories(data);
}