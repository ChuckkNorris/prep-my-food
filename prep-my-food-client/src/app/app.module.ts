import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import 'hammerjs';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MealOptionsComponent } from './templates/meal-options/meal-options.component';
import { BootstrapGridModule } from 'ng2-bootstrap-grid';
import { PreferenceComponent } from './templates/preference/preference.component';
import { MealCardComponent } from './templates/meal-card/meal-card.component';

@NgModule({
  declarations: [
    AppComponent,
    EditProfileComponent,
    DashboardComponent,
    MealOptionsComponent,
    PreferenceComponent,
    MealCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    BootstrapGridModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
