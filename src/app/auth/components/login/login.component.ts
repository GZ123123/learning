import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {
    if(authService.isLoggedIn()) {
      router.navigate(['/'])
    }
  }

  onClick() {
    this.authService.login(
      'admin',
      '1234'
    )
  }
}
