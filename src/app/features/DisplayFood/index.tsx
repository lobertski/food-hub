import { useEffect, useState, Fragment } from "react";

import { getAllMeals } from "@/app/services/getAllMeals";
import { foodSections } from "@/app/static/foodHome";
import { ICategory } from "@/types/mealType";
import { Card, LoadingDots } from "@/app/components";

export function DisplayFood() {
  const [foods, setFoods] = useState(foodSections);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getFood = async () => {
      const meals = await getAllMeals("categories");
      const randomMealsPromises = Array.from(
        { length: 12 },
        async () => await getAllMeals("random")
      );

      const randomMeals = await Promise.all(randomMealsPromises);

      setFoods((prevFoods) => {
        return prevFoods.map((item, index) => {
          item.items =
            item.sectionTitle === "Popular Ingredients"
              ? meals.slice(item.startCount, item.endCount)
              : randomMeals.slice(item.startCount, item.endCount);

          return item;
        });
      });
      setLoading(false);
    };

    getFood();
  }, []);

  return (
    <div className="p-4 bg-[#292420]">
      {foods.map(({ sectionTitle, items }) => (
        <Fragment key={sectionTitle}>
          <h1 className="text-2xl p-8 font-bold text-center">{sectionTitle}</h1>
          {isLoading && <LoadingDots />}
          <div className="grid grid-cols-1 lg:grid-cols-3 xs:grid-cols-2 gap-10 justify-items-center">
            {items.map(
              ({
                idCategory,
                strCategory,
                strCategoryThumb,
                strMeal,
                strMealThumb,
              }: ICategory) => (
                <Card
                  title={strMeal ?? strCategory}
                  key={idCategory}
                  image={strMealThumb ?? strCategoryThumb}
                />
              )
            )}
          </div>
        </Fragment>
      ))}
    </div>
  );
}
