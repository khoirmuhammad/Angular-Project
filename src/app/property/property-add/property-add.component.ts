import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Property } from 'src/app/models/property';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-property-add',
  templateUrl: './property-add.component.html',
  styleUrls: ['./property-add.component.css']
})
export class PropertyAddComponent implements OnInit {

  //@ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTab') formTabs: TabsetComponent;
  nextClicked: boolean;

  addPropertyForm: FormGroup;

  propertyType: Array<string> = ['House','Apartment','Hotel'];
  furnitureType: Array<string> = ['Fully','Semi','Unfurnished'];

  propertyView : Property = {
    Id : 6,
    SellRent: null,
    Name: 'Royal Ambarambar',
    PropertyType: 'Hotel',
    FurnitureType: 'Semi',
    Bhk: 2,
    BuiltArea: 1,
    City: '',
    Price: 300000,
    RTM: 1,
    Description: 'Good Hotels'
  };

  constructor(private router: Router,
              private fb: FormBuilder,
              private alertifyService: AlertifyService) { }

  ngOnInit() {

    this.CreateAddPropertyForm();
    console.log(this.addPropertyForm.controls);
  }

  CreateAddPropertyForm() {
    this.addPropertyForm = this.fb.group({
      BasicInfo: this.fb.group({
        SellRent: [null, Validators.required],
        BHK: [null, Validators.required],
        PropertyType: [null, Validators.required],
        FurnitureType: [null, Validators.required],
        Name: [null, Validators.required],
        City: [null, Validators.required]
      }),

      PriceInfo: this.fb.group({
        Price: [null, Validators.required],
        BuiltArea: [null, Validators.required],
        CarpetArea: [null],
        Security: [null],
        Maintenance: [null],
      }),

      AddressInfo: this.fb.group({
        FloorNo: [null],
        TotalFloor: [null],
        Address: [null, Validators.required],
        LandMark: [null],
      }),

      OtherInfo: this.fb.group({
        RTM: [null, Validators.required],
        PossessionOn: [null],
        AOP: [null],
        Gated: [null],
        MainEntrance: [null],
        Description: [null]
      })
      });
  }

  //#region <Getter Methods>
  // #region <FormGroups>
  get BasicInfo() {
    return this.addPropertyForm.controls["BasicInfo"] as FormGroup;
  }

  get PriceInfo() {
    return this.addPropertyForm.controls["PriceInfo"] as FormGroup;
  }

  get AddressInfo() {
    return this.addPropertyForm.controls["AddressInfo"] as FormGroup;
  }

  get OtherInfo() {
    return this.addPropertyForm.controls["OtherInfo"] as FormGroup;
  }

// #endregion

//#region <Form Controls>
  get SellRent() {
    return this.BasicInfo.controls['SellRent'] as FormControl;
  }

  get BHK() {
    return this.BasicInfo.controls['BHK'] as FormControl;
  }

  get PType() {
    return this.BasicInfo.controls['PropertyType'] as FormControl;
  }

  get FType() {
    return this.BasicInfo.controls['FurnitureType'] as FormControl;
  }

  get Name() {
    return this.BasicInfo.controls['Name'] as FormControl;
  }

  get City() {
    return this.BasicInfo.controls['City'] as FormControl;
  }

  get Price() {
    return this.PriceInfo.controls['Price'] as FormControl;
  }

  get BuiltArea() {
    return this.PriceInfo.controls['BuiltArea'] as FormControl;
  }

  get CarpetArea() {
    return this.PriceInfo.controls['CarpetArea'] as FormControl;
  }

  get Security() {
    return this.PriceInfo.controls['Security'] as FormControl;
  }

  get Maintenance() {
    return this.PriceInfo.controls['Maintenance'] as FormControl;
  }

  get FloorNo() {
    return this.AddressInfo.controls['FloorNo'] as FormControl;
  }

  get TotalFloor() {
    return this.AddressInfo.controls['TotalFloor'] as FormControl;
  }

  get Address() {
    return this.AddressInfo.controls['Address'] as FormControl;
  }

  get LandMark() {
    return this.AddressInfo.controls['LandMark'] as FormControl;
  }

  get RTM() {
    return this.OtherInfo.controls['RTM'] as FormControl;
  }

  get PossessionOn() {
    return this.OtherInfo.controls['PossessionOn'] as FormControl;
  }

  get AOP() {
    return this.OtherInfo.controls['AOP'] as FormControl;
  }

  get Gated() {
    return this.OtherInfo.controls['Gated'] as FormControl;
  }

  get MainEntrance() {
    return this.OtherInfo.controls['MainEntrance'] as FormControl;
  }

  get Description() {
    return this.OtherInfo.controls['Description'] as FormControl;
  }


//#endregion
//#endregion

  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    console.log(this.addPropertyForm);
  }

  allTabsValid(): boolean {

    if (this.BasicInfo.invalid) {
      this.formTabs.tabs[0].active = true;
      return false;
    }

    if (this.PriceInfo.invalid) {
      this.formTabs.tabs[1].active = true;
      return false;
    }

    if (this.AddressInfo.invalid) {
      this.formTabs.tabs[2].active = true;
      return false;
    }

    if (this.OtherInfo.invalid) {
      this.formTabs.tabs[3].active = true;
      return false;
    }
    return true;
  }

  selectTab(NextTabId: number, IsCurrentTabValid: boolean) {

    this.nextClicked = true;
    if (IsCurrentTabValid) {
      this.formTabs.tabs[NextTabId].active = true;
    } else {
      this.alertifyService.warnAlert('Please Fill the required fields')
    }
  }

}
