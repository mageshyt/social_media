import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
type registerProps = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:8000/';

  login(email: string, password: string) {
    return this.http.post(this.baseUrl + 'api/signin', {
      email,
      password,
    });
  }

  register(userDoc: registerProps) {
    return this.http.post(this.baseUrl + 'api/signup', userDoc);
  }
}
