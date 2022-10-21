import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyService } from './services/property.service';
import { PropertyAddComponent } from './property/property-add/property-add.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserService } from './services/user.service';
import { AlertifyService } from './services/alertify.service';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

import { FilteringPipe } from './pipes/filtering.pipe';
import { SortingPipe } from './pipes/sorting.pipe';

const appRoutes : Routes = [
  {path: '', component: PropertyListComponent},
  {path: 'buy-property', component: PropertyListComponent},
  {path: 'rent-property', component: PropertyListComponent},
  {path: 'detail-property/:id', component: PropertyDetailComponent},
  {path: 'add-property', component: PropertyAddComponent},
  {path: 'user/login', component: UserLoginComponent},
  {path: 'user/register', component: UserRegisterComponent},
  {path: '**', component: PropertyListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    PropertyAddComponent,
    PropertyDetailComponent,
    NavBarComponent,
    UserLoginComponent,
    UserRegisterComponent,
    FilteringPipe,
    SortingPipe
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxGalleryModule
  ],
  providers: [
    PropertyService,
    UserService,
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
