import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getUserList(): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${this.apiUrl}/users`)
      .pipe(map(users => users))
  }
}
