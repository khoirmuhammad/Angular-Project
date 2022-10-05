import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyService } from './services/property.service';
import { PropertyAddComponent } from './property/property-add/property-add.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { FormsModule } from '@angular/forms';

const appRoutes : Routes = [
  {path: '', component: PropertyListComponent},
  {path: 'buy-property', component: PropertyListComponent},
  {path: 'rent-property', component: PropertyListComponent},
  {path: 'detail-property/:id', component: PropertyDetailComponent},
  {path: 'add-property', component: PropertyAddComponent},
  {path: '**', component: PropertyListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    PropertyAddComponent,
    PropertyDetailComponent,
    NavBarComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PropertyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
