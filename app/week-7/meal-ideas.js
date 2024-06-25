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
    <div className="">
      <h2 className="text-xl font-bold mb-4 text-white -ml-40">Meal Ideas</h2>
      <h4 className="text-xl font-bold mb-4 text-white -ml-40">{message}</h4>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal} className="mb-2 -ml-40">
            <p className="text-white">{meal.strMeal}</p>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-16 h-16 rounded"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
