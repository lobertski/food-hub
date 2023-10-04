import { mealDbEndpoint } from "./endpoint";

export const getAllMeals = async (action: string, numberOfItems?: number) => {
  try {
    if (action === "random") {
      const randomMeals = [];
      const response = await mealDbEndpoint.get(`${action}.php`);
      return response.data.meals[0];
    }
    const response = await mealDbEndpoint.get(`${action}.php`);
    return response?.data.categories ?? [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
