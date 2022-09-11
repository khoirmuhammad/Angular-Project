
import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties: any;

  constructor(private propertySvc: PropertyService) { }

  ngOnInit(): void {
    this.propertySvc.getAllProperties().subscribe(
      response => {
        this.Properties = response
      },
      error => {
        console.log(error)
      }
    )
  }

}
