import { Component, OnInit } from '@angular/core';
import {UserRepositoryService} from '../services/user.repository.service';
import{AlertService} from '../services/alert.service';
import {  AuthenticationService } from '../services//authentication.service';
import {UserService} from '../services/user.service';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { User } from '../models/user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];

  constructor( private userRepository:UserRepositoryService,private alertService:AlertService,  private authenticationService: AuthenticationService,
    private userService: UserService) { }
  loading = false;
  employee:any= [];
  ngOnInit() {
    
    this.userRepository.GetEmployeeList()
    .subscribe((data: any) => this.employee = data);

}

ngOnDestroy() {
  // unsubscribe to ensure no memory leaks
  this.currentUserSubscription.unsubscribe();
}

}
