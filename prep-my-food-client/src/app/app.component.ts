import { Meals } from './test-data';
import { Meal } from './models/meal';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myMeals: Meal[] = Meals;
}
