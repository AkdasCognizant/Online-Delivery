import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { User } from '../users';

@Component({
  selector: 'app-u-profile',
  standalone: false,
  templateUrl: './u-profile.component.html',
  styleUrl: './u-profile.component.css'
})
export class UProfileComponent {
  activeTab: string = 'orders';
 
  // user = {
  //   name: 'John Doe',
  //   email: 'john.doe@example.com',
  //   phone: '+91 9876543210',
  //   avatar: ''
  // };
 
 
  menuItems = [
    { key: 'orders', label: 'Orders', badge: 2 },
    { key: 'addresses', label: 'Addresses', badge: 2 },
    { key: 'favorites', label: 'Favorites' },
    { key: 'help', label: 'Help & Support' }
  ];



  user!: User;
  editForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UsersService) {}

  // ngOnInit(): void {
  //   const userId = localStorage.getItem('loggedInUserId');
  //   if (userId) {
  //     this.userService.getCustomers(+userId).subscribe({
  //       next: (data: User) => {
  //         this.user = data;
  //         this.editForm = this.fb.group({
  //           name: [data.name, Validators.required],
  //           email: [data.email, [Validators.required, Validators.email]],
  //           phone: [data.phone, [Validators.required, Validators.pattern('^[0-9]{10}$')]],
  //           password: [data.password, Validators.required]
  //         });
  //       },
  //       error: () => console.error('Failed to load user data')
  //     });
  //   }
  // }

  showEditForm(): void {
    this.activeTab = 'edit';
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  onUpdate(): void {
    if (this.editForm.invalid || !this.user.id) return;

    const updatedUser: User = {
      ...this.user,
      ...this.editForm.value
    };

    this.userService.updateCustomer(this.user.id, updatedUser).subscribe({
      next: () => {
        this.user = updatedUser;
        alert('Profile updated successfully!');
        this.activeTab = 'orders'; // Optional: return to orders tab
      },
      error: () => alert('Failed to update profile.')
    });
  }
}
