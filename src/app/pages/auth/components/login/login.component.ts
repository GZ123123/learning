import { Component } from '@angular/core';
import { AuthService } from 'services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private authService: AuthService, private router: Router) {
    if(authService.isLoggedIn()) {
      router.navigate(['/'])
    }
  }

  onSubmit() {
    if(this.formGroup.valid) {
      const { username, password } = this.formGroup.value
      this.authService.login(username as string, password as string)
    }
  }
}
