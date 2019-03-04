import { NgModule } from "../../../node_modules/@angular/core";
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from "./recipes.component";
import { CommonModule } from "../../../node_modules/@angular/common";
import { ReactiveFormsModule } from "../../../node_modules/@angular/forms";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeStartComponent,
    RecipesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
  ]
})
export class RecipesModule {}