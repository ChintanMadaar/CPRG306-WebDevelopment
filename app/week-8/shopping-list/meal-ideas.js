import React, { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [message, setMessage] = useState("Select an item to see meal ideas");

  const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  };

  const loadMealIdeas = async () => {
    if (ingredient) {
      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas);
      if (mealIdeas.length === 0) {
        setMessage(`No meal ideas found for ${ingredient}`);
      } else {
        setMessage(`Here are some meal ideas using ${ingredient}:`);
      }
    } else {
      setMessage("Select an item to see meal ideas");
    }
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-white">Meal Ideas</h2>
      <h4 className="text-lg font-semibold mb-4 text-white">{message}</h4>
      <ul className=" mr-12 ">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="mb-6">
            <p className="text-black font-bold text-lg border-4 bg-slate-400 border-slate-400">
              {meal.strMeal}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
