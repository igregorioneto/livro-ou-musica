import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(user: any) {
    this.http.post<any>('http://localhost:3000', user)
    .subscribe(result => {
      if(result && result.token) {
        window.localStorage.setItem('token', result.token)
        return true
      } else {
        return false
      }
    })
  }

  createAccount(user: any) {
    this.http.post<any>('http://localhost:3000', user)
    .subscribe(result => {
      return result
    })
  }

  isTokenStorage() {
    const token = window.localStorage.getItem('token')
    return token
  }

  isLoggedUser(): boolean {
    if(!this.isTokenStorage()) {
      return false
    } else {
      return true
    }
  }
}
