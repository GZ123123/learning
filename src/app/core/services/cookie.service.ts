import { Injectable } from "@angular/core";

import Cookies from 'js-cookie'

@Injectable({ providedIn: 'root' })
export class CookieService {

  cookies = Cookies

  private config: Cookies.CookieAttributes = {
    expires: 60, // d
    sameSite: 'lax'
  }

  constructor() {

  }

  get(key: string) {
    return this.cookies.get(key)
  }

  has(key: string) {
    return !!this.get(key)
  }

  set(key: string, value: string) {
    return this.cookies.set(key, value, this.config)
  }

  remove(key: string) {
    this.cookies.remove(key)
  }
}
