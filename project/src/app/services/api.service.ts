import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userURL } from '../utils/urlconts';
import { IUser } from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient ) { }

  login( email: string, password: string ) {
    const obj = {
      email: email,
      password: password
    }
    return this.http.post<IUser>( userURL.login, obj )
  }

}
