import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyService } from 'src/app/services/property.service';
import { Property } from 'src/app/models/property';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId: number;
  property = new Property();

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private propertyService: PropertyService) { }

  ngOnInit() {
    this.propertyId = +this.route.snapshot.params['id'];
    this.onLoad();
    this.onLoadImages();
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
          },
          error => {
            debugger
            this.router.navigate(['/'])
          }
        );
      }
    );
  }


  onLoadImages(){
    this.galleryOptions = [
      {
        width: '100%',
        height: '465px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: true
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/img-1.png',
        medium: 'assets/images/img-1.png',
        big: 'assets/images/img-1.png'
      },
      {
        small: 'assets/images/img-2.png',
        medium: 'assets/images/img-2.png',
        big: 'assets/images/img-2.png'
      },
      {
        small: 'assets/images/img-3.png',
        medium: 'assets/images/img-3.png',
        big: 'assets/images/img-3.png'
      },
      {
        small: 'assets/images/img-4.png',
        medium: 'assets/images/img-4.png',
        big: 'assets/images/img-4.png'
      },
      {
        small: 'assets/images/img-5.png',
        medium: 'assets/images/img-5.png',
        big: 'assets/images/img-5.png'
      }
    ];
  }


}
