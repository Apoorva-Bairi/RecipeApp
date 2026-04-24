import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRecipesBySearch, fetchByCategory, fetchRecipeById } from "../../services/mealAPI";

// interface RecipeState {
//   recipes: any[];
//   loading: boolean;
//   error: string | null;
// }

// const initialState: RecipeState = {
//   recipes: [],
//   loading: false,
//   error: null,
// };

interface RecipeState {
  recipes: any[];
  selectedRecipe: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: RecipeState = {
  recipes: [],
  selectedRecipe: null,
  loading: false,
  error: null,
};

export const getRecipes = createAsyncThunk(
  "recipes/getRecipes",
  async (query: string) => {
    const data = await fetchRecipesBySearch(query);
    return data || [];
  }
);

export const getRecipesByCategory = createAsyncThunk(
  "recipes/getByCategory",
  async (category: string) => {
    const data = await fetchByCategory(category);
     console.log("CATEGORY DATA:", data);
    return data || [];
  }
);

export const getRecipeDetails = createAsyncThunk(
  "recipes/getDetails",
  async (id: string) => {
    const data = await fetchRecipeById(id);
    return data;
  }
);



const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecipes.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.recipes = action.payload;
      })
      .addCase(getRecipes.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch recipes";
      })
      .addCase(getRecipesByCategory.pending, (state) => {
            state.loading = true;
        })
      .addCase(getRecipesByCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.recipes = action.payload;
            })
      .addCase(getRecipesByCategory.rejected, (state) => {
                state.loading = false;
                state.error = "Failed to fetch category";
            })
       .addCase(getRecipeDetails.pending, (state) => {
                 state.loading = true;
            })
        .addCase(getRecipeDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedRecipe = action.payload;
        })
        .addCase(getRecipeDetails.rejected, (state) => {
        state.loading = false;
        });     


    },
});

export default recipesSlice.reducer;