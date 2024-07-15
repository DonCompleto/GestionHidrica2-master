import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import {  ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LoginComponent,ReactiveFormsModule],
  templateUrl: "./navbar.component.html",
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent { 
  isNotificacionesOpen: boolean = false;

  constructor(private router: Router) {}

  openNotificaciones() {
    this.isNotificacionesOpen = true;
  }

  closeNotificaciones() {
    this.isNotificacionesOpen = false;
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}