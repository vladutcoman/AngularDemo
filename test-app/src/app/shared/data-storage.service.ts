import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { RecipeService } from "../recipes/recipe.service";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, 
              private recipeService: RecipeService,
              private authService: AuthService) {}

  storeRecipe() {
    const token = this.authService.getToken();
    return this.http.put('https://angulardemo-d33da.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }
}