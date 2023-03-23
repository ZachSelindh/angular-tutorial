import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 'This is simply a test', 'https://www.cookipedia.co.uk/wiki/images/b/bf/Rock_salmon_with_garlic_and_coriander.jpg')
      ];

    getRecipes() {
        return [...this.recipes];
    }
}