import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth1Service } from '../auth1.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router, private authService: Auth1Service) {}

  navigateToProfile(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/uProfile']); 
    } else {
      this.router.navigate(['/commonLogin'], { queryParams: {redirect : '/home'}}); 
    }
  }
}
