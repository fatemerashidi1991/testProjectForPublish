import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, catchError ,retry} from 'rxjs/operators';

import { User } from '../models/user';
import { JsonPipe} from '@angular/common/src/pipes/json_pipe';
import { error } from '@angular/compiler/src/util';
import { Employee } from '../models/employee';
@Injectable({ providedIn: 'root' })
export class UserRepositoryService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
       
    }

   

    // GetEmployeeList() {
    //   //  let token = localStorage.getItem('currentUserToken');
    //     //let headers: HttpHeaders = new HttpHeaders();
    //    // headers = headers.set('token', token);
       
    //    //"auth":{"type":"bearer","bearer":[{"key":"token","value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjQ4NDc5OWE1LWY5ZWItNGFhOS05MzhkLTllOWE1MzY0YjdkZCIsIm5iZiI6MTU1ODA0MzIxNCwiZXhwIjoxNTU4NjQ4MDE0LCJpYXQiOjE1NTgwNDMyMTQsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY5IiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzNjkifQ.weN28ipTaAwNpjRqz3g9VX1WmDkvU9fWh2s50-W18EM"}]}
    //     //headers.append('Authorization',token)
    //     return this.http.get(`https://api.tsetab.com/api/books/EmployeeList`);
    
    // }
    GetEmployeeList(): Observable<Employee> {
        return this.http.get<Employee>(`https://api.tsetab.com/api/books/EmployeeList`)
        .pipe(
        retry(1),
        catchError(error)
        )
        }  
}