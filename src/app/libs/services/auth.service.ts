import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from './cookie.service';

export const TOKEN = '__token__'

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private router: Router, private cookies: CookieService) { }

  login(username: string, password: string) {
    if(username !== 'admin' || password !== '12345') {
      return false;
    }

    this.cookies.set(TOKEN, 'token')

    return this.router.navigate(['/'])
  }

  isLoggedIn() {
    return this.cookies.has(TOKEN)
  }

  logout() {
    this.cookies.remove(TOKEN)

    return this.router.navigate(['/login'])
  }
}
