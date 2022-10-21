
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from 'src/app/models/property';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent: number;
  Properties: Array<Property>;

  date = new Date();
  City = '';
  SearchCityValue = '';
  SortbyParam = 'City';
  SortDirection = 'asc';

  constructor(private activedRoute: ActivatedRoute,
              private propertySvc: PropertyService) { }

  ngOnInit(): void {

    if (this.activedRoute.snapshot.url.toString() == 'buy-property') {
      this.SellRent = 0
    } else if (this.activedRoute.snapshot.url.toString() == 'rent-property') {
      this.SellRent = 1
    }

    this.propertySvc.getAllProperties().subscribe(
      response => {
        if (this.SellRent == 0) {
          this.Properties = response.filter(f => f.SellRent == 0);
        } else if (this.SellRent == 1){
          this.Properties = response.filter(f => f.SellRent == 1);
        } else {
          this.Properties = response;
        }

      },
      error => {
        console.log(error)
      }
    )
  }

  onCityFilter() {
    this.SearchCityValue = this.City;
  }

  onCityFilterClear() {
    this.SearchCityValue = '';
    this.City = '';
  }

  onSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  }

}
