import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL = 'http://localhost:3000/users';
  tokenKey = 'cms-nestjs';
  private token = null;

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
        this.token = token;
        localStorage.setItem(this.tokenKey, token.access_token);
      });
  }

  decodePayloadToken(token) {
    const payload = JSON.parse(atob(token.access_token.split('.')[1]));
    console.log('payload', payload);
    return payload;
  }

  get isAdmin() {
    if (!this.token) {
      return false;
    }
    const payload = this.decodePayloadToken(this.token);
    if (payload.role === 'admin') {
      return true;
    } else {
      return false;
    }
  }

}
