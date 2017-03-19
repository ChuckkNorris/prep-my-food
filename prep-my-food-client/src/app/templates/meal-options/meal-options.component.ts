import { Meal } from './../../models/meal';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meal-options',
  templateUrl: './meal-options.component.html',
  styleUrls: ['./meal-options.component.css']
})
export class MealOptionsComponent implements OnInit {
  @Input() meals: Meal[] = [];
  constructor() { }

  ngOnInit() {
    console.log(this.meals);
    
  }
 
}
