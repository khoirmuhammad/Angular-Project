
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProperty } from 'src/app/interfaces/IProperty.interface';
import { Property } from 'src/app/models/property';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  IsBuy: number;
  IsRent: number;
  Properties: Array<Property>;

  constructor(private activedRoute: ActivatedRoute,
              private propertySvc: PropertyService) { }

  ngOnInit(): void {

    if (this.activedRoute.snapshot.url.toString() == 'buy-property') {
      this.IsBuy = 1; this.IsRent = 0;
    } else if (this.activedRoute.snapshot.url.toString() == 'rent-property') {
      this.IsBuy = 0; this.IsRent = 1;
    } else {
      this.IsBuy = 1; this.IsRent = 1;
    }

    this.propertySvc.getAllProperties().subscribe(
      response => {
        if (this.IsBuy && !this.IsRent) {
          this.Properties = response.filter(f => f.IsBuy == 1 && f.IsRent == 0);
        } else if (!this.IsBuy && this.IsRent){
          this.Properties = response.filter(f => f.IsBuy == 0 && f.IsRent == 1);
        } else if (this.IsBuy && this.IsRent) {
          this.Properties = response;
        }

      },
      error => {
        console.log(error)
      }
    )
  }

}
