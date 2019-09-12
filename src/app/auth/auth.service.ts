import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL = 'http://localhost:3000/users';
  tokenKey = 'cms-nestjs';

  constructor(private http: HttpClient) { }

  register(credentials) {
    const fullURL = `${this.baseURL}/register`;
    this.http
      .post<any>(fullURL, credentials)
      .subscribe(createdUser => {
        console.log('createdUser', createdUser);
      });
  }

  login(credentials) {
    const fullURL = 'http://localhost:3000/auth/login';
    this.http
      .post<any>(fullURL, credentials)
      .subscribe(token => {
        console.log('token', token);
        localStorage.setItem(this.tokenKey, token.access_token);
      });
  }

}
