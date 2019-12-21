import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  _loginForm:FormGroup;
  isSubmitted  =  false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService : AuthenticationService) { }

  ngOnInit() {
    this._loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    console.log("this.returnUrl",this.returnUrl)

    if(this.authService.currentUserValue)this.router.navigate(['/dashboard']);
  }

  get f() { return this._loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this._loginForm.invalid) {
      return;
    }
    this.authService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log("url",this.returnUrl);
          this.router.navigate([this.returnUrl]);
          // this.router.navigate(['dashboard']);
        },
        error => {
          this.error = error.error;
          console.log(this.error);
        });
  }
}
