export type RecipeType = {
  id: string;
  title: string;
  link: string;
  img: string;
  description: string;
  prepTime: string;
  cookTime: string;
  servings: string;
  ingredients: string[]; // TODO: change to string array
  instructions: string[]; // TODO: change to string array
};
