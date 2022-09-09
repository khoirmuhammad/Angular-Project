import { Component } from "@angular/core";

@Component({
  selector: 'app-property-card',
  templateUrl: 'property-card.component.html',
  styleUrls:['property-card.component.css']
  // template: `<h1>Hi, This is property card</h1>`,
  // styles: [`h1{font-weight: normal;}`]
})

export class PropertyCardComponent{
  Property: any = {
    "Id": 1,
    "Name": "Dase Grande Minimalize",
    "Type": "House",
    "Price": 35000
  }
}
