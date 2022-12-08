import { Component, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'Just tryin...', 'https://cuisine.land/upload/recettes/large/53_MQGWWFCAA400CKDU.jpg'),
    new Recipe('A Test Recipe 2', 'Just tryin...', 'https://www.hachette.fr/sites/default/files/styles/vertical_recette/public/burger.jpg'),
    new Recipe('A Test Recipe 3', 'Just tryin...', 'https://resize.elle.fr/portrait_320_webp/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/falafels-sauces-tahini-et-au-yaourt-2692913/46802554-1-fre-FR/Falafels-sauces-tahini-et-au-yaourt.jpg')
  ]
  recipe: {};

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
