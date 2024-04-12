import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../users/models/user';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = "http://localhost:3000";
  isLoggedIn: boolean = false;
  userLogged$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) { }

  checkUser(user: User, isLogin: boolean = true): Observable<User> {
    const options = {
      params: new HttpParams().set('username', user.username)
    }

    if (isLogin) {
      options.params.set("password", user.password)
    }

    return this.http.get<Array<User>>(`${this.apiUrl}/users`, options)
      .pipe(map(res => res[0]))
  }

  login(user: User): Observable<boolean> {
    return this.checkUser(user).pipe(
      map(res => {
        if (res) {
          this.isLoggedIn = true;
          this.userLogged$.next(res);
          return true
        } else {
          this.isLoggedIn = false;
          this.userLogged$.next(null);
          return false
        }
      })
    )
  }

  logout(): void {
    this.isLoggedIn = false;
    this.userLogged$.next(null);
  }

  signIn(user: User): Observable<boolean> {
    return this.checkUser(user, false).pipe(map(res => {
      if (res) {
        return false
      } else {
        return true
      }
    }))
  }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user)
      .pipe(map((user) => {
        return user
      }));
  }
}
