import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../Modeles/users.model';
import {environment} from "../../environments/environment";
import {BehaviorSubject, catchError, Observable, tap, throwError} from "rxjs";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiServiceUrl = environment.apiBaseUrl;
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  currentUser= {};

  constructor(private http: HttpClient) {
    const token=localStorage.getItem('access_token');
    this._isLoggedIn$.next(!! token);
  }

  public login(email : string, password : string){
    return this.http.post<any>(`${this.apiServiceUrl}/api/login`,
    {
      email,
      password
    }).pipe(
      tap((res:any) =>{
        localStorage.setItem('access_token', res.jwt);
        this._isLoggedIn$.next(true);
        console.log("User id", res.username);
      })
    )
  }

  public doLogout(){
    localStorage.clear();
    this._isLoggedIn$.next(false);
  }

  public register(user : Users): Observable<Users>{
    return this.http.post<any>(`${this.apiServiceUrl}/auth/register`, {
      user
    });
  }

  getToken(){
    return localStorage.getItem('access_token');
  }

  getUserProfile(user : Users): Observable<Users>{
    return this.http.get<any>(`${this.apiServiceUrl}/${user.id}`)
      .pipe(
        map((res) =>{
          return res || {};
        }),
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    let msg='';
    if(error.error instanceof ErrorEvent){
      msg = error.error.message;
    }else{
      msg =  `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
