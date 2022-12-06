import { Component } from '@angular/core';

import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Just tryin...', 'https://cuisine.land/upload/recettes/large/53_MQGWWFCAA400CKDU.jpg')
  ]

  constructor() {}

  ngOnInit() {}
}
