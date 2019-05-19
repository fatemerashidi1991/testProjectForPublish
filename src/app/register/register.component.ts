import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators'; 
//import { AlertService, AuthenticationService ,UserService} from '../services';
import { AlertService} from '../services/alert.service';
import { AuthenticationService} from '../services/authentication.service';
import { UserService} from '../services/user.service';
import { VERSION, MatDialogRef, MatDialog, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        margin: 100px 0px;
      }

      .mat-form-field {
        width: 100%;
        min-width: 300px;
      }

      mat-card-title,
      mat-card-content {
        display: flex;
        justify-content: center;
      }

      .error {
        padding: 16px;
        width: 300px;
        color: white;
        background-color: red;
      }

      .button {
        display: flex;
        justify-content: flex-end;
      }
    `,
  ],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
    loading = false;
    submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService,
    private dialog: MatDialog
){

    // // redirect to home if already logged in
    // if (this.authenticationService.currentUserValue ) { 
    //     this.router.navigate(['/']);
    // }
 }

 ngOnInit() {
  this.registerForm = this.formBuilder.group({
    FirstName: ['', Validators.required],
    LastName: ['', Validators.required],
    NationalCode: ['', Validators.required],
    Password: ['', [Validators.required, Validators.minLength(8)]],
    ConfirmPassword: ['',[Validators.required, Validators.minLength(8)]],
    MobileNumber: ['', Validators.required],
  });
}
// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }

onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.loading = true;
    this.userService.register(this.registerForm.value)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
                this.loading = false;
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            
            });
}
GoToLoginPage(){
  this.router.navigate(['/login']);
}

}
