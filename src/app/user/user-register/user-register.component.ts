import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { User, UserRegister } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { AlertifyService } from 'src/app/services/alertify.service';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForms: FormGroup;
  user: User;
  userRegister: UserRegister;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private alertifyService: AlertifyService) { }

  ngOnInit() {
    this.buildRegistrationForm();
  }

  buildRegistrationForm(){
    this.registrationForms = this.formBuilder.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, Validators.required],
      mobile: [null, [Validators.required, Validators.minLength(10)]]
    }, {validator: this.passwordMatchingValidator});
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
    this.userService.registerUser(this.populateUserRegister()).subscribe(
      () => {
        this.registrationForms.reset();
        this.alertifyService.successAlert("Congratulation. Your data has registerred");
      }, error => {
        this.alertifyService.errorAlert(error.error);
      }
    );

  }

  populateUserRegister(): UserRegister{
    return this.userRegister = {
      username: this.emailShorter.value.split('@')[0],
      password: this.passwordShorter.value
    };
  }

}
