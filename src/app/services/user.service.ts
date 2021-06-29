import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {User} from "../models";
import {map, tap} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class UserService {

  private baseUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {

  }

  getUsersByName(name: string): Observable<User[]> {
    return this
      .httpClient
      .get<User[]>(this.baseUrl)
      .pipe(
        map(users => users.filter(user => user.name.includes(name))),
        tap(x => console.log(x)) //tap - for logging operations
      );
  }

  getUsers(): Observable<User[]> {
    return this
      .httpClient
      .get<User[]>(this.baseUrl)
  }

}
