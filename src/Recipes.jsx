import React from "react";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import "./Styles/Recipes.css";


const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="
function Recipes() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [randomQuoteIndex, setRandomQuoteIndex] = useState(null);

  const searchRecipes = async () => {
    setIsLoading(true);
    const url = apiUrl + query;
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals);
    setIsLoading(false);
  };

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * foodQuotes.length);
    setRandomQuoteIndex(randomIndex);
  }

  useEffect(() => {
    searchRecipes();
    getRandomQuote();
  }, []);
    
  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  }

  const foodQuotes = [
    "Food is the ingredient that binds us together.",
    "Good food is the foundation of genuine happiness.",
    "The only thing I like better than talking about food is eating.",
    "Cooking is love made visible.",
    "The secret ingredient is always cheese.",
    "Calories don't count when you're enjoying good food.",
    "I'm on a seafood diet. I see food, and I eat it.",
    "Stressed spelled backward is desserts. Coincidence? I don't think so.",
    "I like long walks to the fridge.",
    "I'm on a whiskey diet. I've lost three days already.",
    "I followed my heart, and it led me to the fridge.",
    "I'm in a committed relationship with tacos.",
    "Life is short. Eat dessert first, and then eat it again."
  ]

  return (
    <div className="container">
      <h2>Kitchen Secrets</h2>
      <h2>የጣፋጭ ምግቦች ሚስጥሮች መገኛ</h2>
      <SearchBar
        isLoading={isLoading}
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
      />
      <div className="quotes">
        {randomQuoteIndex !== null && (
          <p className="quote">{foodQuotes[randomQuoteIndex]}</p>
        )}
      </div>
      <div className="recipes">
        {recipes 
          ? recipes.map(recipe => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
        )) 
      : "No Results."}
      </div>
    </div>
  );
}

export default Recipes;
