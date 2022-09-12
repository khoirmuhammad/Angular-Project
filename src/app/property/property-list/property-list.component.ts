
import { Component, OnInit } from '@angular/core';
import { IProperty } from 'src/app/interfaces/IProperty.interface';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties: Array<IProperty>;

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
