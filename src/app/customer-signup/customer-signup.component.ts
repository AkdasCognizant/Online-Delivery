import { Router, RouterModule } from '@angular/router';
import { Directive, ElementRef, Renderer2 } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { User } from '../users';
import { CommonModule, NgIf } from '@angular/common';
 
@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.css'],
  imports: [ReactiveFormsModule, CommonModule, NgIf,  RouterModule], // ✅ Add this line
  
})
export class CustomerSignupComponent implements OnInit {
  signupForm!: FormGroup;
  submitted = false;
  message = '';

  constructor(private fb: FormBuilder, private userService: UsersService, private route : Router) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      // address: ['', [Validators.required]],
    });
  }

  // ✅ This getter allows template access like f.address.errors
  get f() {
    return this.signupForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.signupForm.invalid) return;

    const newUser: User = this.signupForm.value;

    this.userService.signUp(newUser).subscribe({
      next: () => {
        alert('Customer signed up successfully!'); // ✅ Native alert box
        this.message = 'Customer signed up successfully!';
        this.signupForm.reset();
        this.submitted = false;
      },
      error: () => {
        alert('Signup failed. Please try again!'); // ✅ Error alert
        this.message = 'Signup failed. Please try again!';
      }
    });

    this.route.navigate(['/commonLogin']);
  }
}