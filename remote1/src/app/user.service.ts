import { Injectable } from '@angular/core';
import { Register } from './Register';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})


export class UserService {

  constructor(private http: HttpClient, private router: Router) { 

  }

  // postDetails(userForm: Register) {
  //   return this.http.post( "", userForm);
  // }

  postDetails(userForm:Register){
    return this.http.post('http://localhost:3000/register',userForm)
  }
}
