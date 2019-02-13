import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Test recipe 1', 
      'Test 1', 
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Ing1', 2),
        new Ingredient('Ing2', 22)
      ]
    ),
    new Recipe(
      'Test recipe 2',
      'Test 2', 
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Ing3', 12),
        new Ingredient('Ing4', 72)
      ]
  )
  ]

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipeIngredientsToSHopList(ingredinets: Ingredient[]) {
    for (let ingredient of ingredinets) {
      this.slService.addIngredient(ingredient);
    }
  }
}