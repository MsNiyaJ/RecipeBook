export type RecipeType = {
  title: string;
  link: string;
  img: string;
  description: string;
  prepTime: string;
  cookTime: string;
  servings: string;
  ingredients: string[];
  instructions: string[];
};

export type DropdownType = {
  title?: string;
  data: string[];
  type?: 'checkbox' | 'text' | 'numbered';
};
