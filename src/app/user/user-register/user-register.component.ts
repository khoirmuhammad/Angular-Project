import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForms: FormGroup;
  constructor() { }

  ngOnInit() {
    this.registrationForms = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required, Validators.minLength(10)])
    }, this.passwordMatchingValidator);
  }

  passwordMatchingValidator(fc: AbstractControl): ValidationErrors | null {
    return fc.get('password')?.value === fc.get('confirmPassword')?.value ? null :
      { notmatched: true }
  };

  get userNameShorter(){
    return this.registrationForms.get('userName') as FormControl;
  }

  get emailShorter(){
    return this.registrationForms.get('email') as FormControl;
  }

  get passwordShorter(){
    return this.registrationForms.get('password') as FormControl;
  }

  get confirmPasswordShorter(){
    return this.registrationForms.get('confirmPassword') as FormControl;
  }

  get mobileShorter(){
    return this.registrationForms.get('mobile') as FormControl;
  }

  onSubmit(){

  }

}
