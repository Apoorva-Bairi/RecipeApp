import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchRecipesBySearch = async (query: string) => {
  const res = await axios.get(`${BASE_URL}/search.php?s=${query}`);
  return res.data.meals;
};

export const fetchByCategory = async (category: string) => {
  const res = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );
  return res.data.meals;
};

export const fetchRecipeById = async (id: string) => {
  const res = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  return res.data.meals[0];
};