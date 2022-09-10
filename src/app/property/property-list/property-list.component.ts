import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties: Array<any> = [
    {
      "Id": 1,
      "Name": "Dase Grande Minimalize",
      "Type": "House",
      "Price": 55000
    },
    {
      "Id": 2,
      "Name": "Vondox Inda",
      "Type": "House",
      "Price": 176000
    },
    {
      "Id": 3,
      "Name": "Xalipata City",
      "Type": "Appartment",
      "Price": 35000
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
