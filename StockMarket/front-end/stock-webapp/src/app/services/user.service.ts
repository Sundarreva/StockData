import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl;

  httpOptions: any;

  constructor(private httpClient: HttpClient, private authSer: AuthService) { }


  userSignup(userData) {
    return this.httpClient.post(this.baseUrl+"authentication-service/stockmarket/user/signup",userData);    
  }

  updateUser(userData) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authSer.getToken()
      })
    };
    return this.httpClient.put(this.baseUrl+"authentication-service/stockmarket/user",userData,this.httpOptions);
  }

  getUserByName(userName) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authSer.getToken()
      })
    };
    return this.httpClient.get(this.baseUrl+"authentication-service/stockmarket/user/"+userName);
  }

}
