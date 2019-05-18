import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { User } from '../models/user';
import { JsonPipe} from '@angular/common/src/pipes/json_pipe';
import { error } from '@angular/compiler/src/util';
@Injectable({ providedIn: 'root' })
export class UserRepositoryService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
       
    }

   

    GetEmployeeList() {
        let token = localStorage.getItem('currentUserToken');
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('token', token);
     
        return this.http.get(`https://api.tsetab.com/api/books/EmployeeList`,{headers: headers});
    
    }

}