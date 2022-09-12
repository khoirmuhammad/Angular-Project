import { Component, Input } from "@angular/core";
import { IProperty } from "src/app/interfaces/IProperty.interface";

@Component({
  selector: 'app-property-card',
  templateUrl: 'property-card.component.html',
  styleUrls:['property-card.component.css']
})

export class PropertyCardComponent{
  @Input() propertyInput : IProperty;
}
