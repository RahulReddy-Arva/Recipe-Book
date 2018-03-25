import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Maggi','This is how you make maggi','https://upload.wikimedia.org/wikipedia/commons/4/46/Maggi_Goreng.jpg'),
    new Recipe('Pizza','Pizza hut pizza','https://cdn.pixabay.com/photo/2017/08/06/06/42/pizza-2589569_1280.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
