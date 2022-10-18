import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyService } from 'src/app/services/property.service';
import { Property } from 'src/app/models/property';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId: number;
  property = new Property();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private propertyService: PropertyService) { }

  ngOnInit() {
    this.propertyId = +this.route.snapshot.params['id'];
    this.onLoad();
  }

  onLoad() {

    this.route.params.subscribe(
      (params) => {
        this.propertyId = +params['id'];
        this.propertyService.getProperty(this.propertyId).subscribe(
          data => {
            debugger;
            if (data != null) {
              this.property = data;
            }
          }
        );
      }
    );
  }

  onClickNextButton() {
    this.propertyId += 1;
    this.router.navigate(['detail-property', this.propertyId])
  }

}
