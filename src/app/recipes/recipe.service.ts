import { EventEmitter,Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Spaghet', 
            `Hey I'm walkin' ere`, 
            'https://www.cookipedia.co.uk/wiki/images/b/bf/Rock_salmon_with_garlic_and_coriander.jpg',
            [ 
                new Ingredient('Salmon', 1),
                new Ingredient('Pasta', 2),
            ]
        ),
        new Recipe('Beesechurger', 
            `Huh`, 
            `https://www.austinchronicle.com/binary/8e59/food_JewBoyBurgers3.jpg`,
            [ 
                new Ingredient('Beef', 15),
                new Ingredient('Bread', 2),
                new Ingredient('Cheese', 1),
        ]),
    ];     

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return [...this.recipes];
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}