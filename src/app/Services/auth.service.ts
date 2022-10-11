import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../Modeles/user.modele';

 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //@ts-ignore
  users: User[] = [{"nomUser":"DRH","password": "admin", "roles": ['ADMIN'] }];

  host: string = 'http://localhost:8081/users';

  username!: string;
  role!: Array<string>;

  public loggedUser!: string;
  public isLoggedIn: Boolean= false;
  public roles!: string[];

  constructor(private router: Router, private http: HttpClient) { }

  getUser(username: string): Observable<User>
  {
    const url = `${this.host}/search/findByNomUser?username=${username}`;
    return this.http.get<User>(url);
  }

  signIn (user : User): Boolean{

    let validUser: Boolean = false;
    this.users.forEach((curUser) => {
      if (user.username == curUser.username && user.password == curUser.password){
        validUser = true;
        this.loggedUser = curUser.username;
        this.isLoggedIn = true;

        this.roles = curUser.roles;
        localStorage.setItem('utilisateur connecté', this.loggedUser);
        localStorage.setItem('est connecté', String(this.isLoggedIn));
      }
     });

     isAdmin() : Boolean{
      if (!this.roles)
      return falsereturn (this.roles.indexOf('ADMIN') > -1);
     }

     logout() {
      this.isLoggedIn = false;
      //@ts-ignore
      this.loggedUser = undefined;
      //@ts-ignore
      this.roles = undefined;
      localStorage.removeItem(key: 'loggedUser');
      this.router.navigate(commands: ['/login']);
     }

     detLoggedUserFromLocalStorage (login: string){
      this.loggedUser = login;
      this.isLoggedIn = true;
      this.getUserRoles(login);
     }

     getUserRoles(username : string){

      this.users.forEach( (curUser) => {

        if (curUser.username = this.username){
          //@ts-ignore
          this.roles = curUser.roles;
        }
      });
     }
  }
}
