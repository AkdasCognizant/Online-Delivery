
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../users';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Auth1Service } from '../auth1.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule]
})
export class CustomerLoginComponent implements OnInit {
  loginForm!: FormGroup;
  message = '';

  ///////////////////////////////SignUp//////////////////////////////////
  signupForm!: FormGroup;
  submitted = false;
  message2 = '';
  /////////////////////////////////////////////////////////////////

  redirectUrl: string = '/home';

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
    // for auth gurad
    private authService: Auth1Service
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    /////////////////////////////////////SignUp//////////////////////////

 

    //////////////////////////////////////////////////////////////////////////

    const container = document.getElementById('container') as HTMLElement;
    const registerBtn = document.getElementById('register') as HTMLButtonElement;
    const loginBtn = document.getElementById('login') as HTMLButtonElement;
 
    if (registerBtn && container) {
      registerBtn.addEventListener('click', () => {
        container.classList.add('active');
      });
    }
 
    if (loginBtn && container) {
      loginBtn.addEventListener('click', () => {
        container.classList.remove('active');
      });
    }





    // code for query params for successfull user login 
    this.route.queryParams.subscribe(params => {
      this.redirectUrl = params['redirect'] || '/home';
    });

  }
//////////////////////////////////////////////signu/////////////////////////
   
///////////////////////////////////////////////////////////////////////////
onSubmit(): void {
  if (this.loginForm.invalid) return;

  const { email, password } = this.loginForm.value;

  this.userService.getCustomers().subscribe((users: User[]) => {
    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      this.message = 'Login successful!';
      this.authService.login(); // ✅ Set login flag
      this.router.navigate(['/home']); // ✅ Redirect to home
    } else {
      this.message = 'Invalid email or password.';
    }
  });
}

onLoginSuccess(){
  this.authService.login();
  this.router.navigate([this.redirectUrl]);
}

 
  


    // /////////////////////////////////SignUp/////////////////////////////////////////////////////////
    
 
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}
