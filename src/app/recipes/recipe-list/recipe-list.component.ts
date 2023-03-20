import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is simply a test', 'https://www.cookipedia.co.uk/wiki/images/b/bf/Rock_salmon_with_garlic_and_coriander.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
