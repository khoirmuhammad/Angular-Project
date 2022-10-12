import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Property } from 'src/app/models/property';

@Component({
  selector: 'app-property-add',
  templateUrl: './property-add.component.html',
  styleUrls: ['./property-add.component.css']
})
export class PropertyAddComponent implements OnInit {

  @ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTab') staticTabs?: TabsetComponent;

  propertyType: Array<string> = ['House','Apartment','Hotel'];
  furnitureType: Array<string> = ['Fully','Semi','Unfurnished'];

  propertyView : Property = {
    Id : 6,
    IsBuy: 1,
    IsRent: 0,
    Name: 'Royal Ambarambar',
    PropertyType: 'Hotel',
    FurnitureType: 'Semi',
    Bhk: 2,
    BuiltArea: 1,
    City: 'Yogyakarta',
    Price: 300000,
    RTM: 1,
    Description: 'Good Hotels'
  };

  constructor(private router: Router) { }

  ngOnInit() {

  }

  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }

}
