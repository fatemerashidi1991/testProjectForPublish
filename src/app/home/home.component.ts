import { Component, OnInit } from '@angular/core';
import {UserRepositoryService} from '../services/user.repository.service';
import{AlertService} from '../services/alert.service';
import {  AuthenticationService } from '../services//authentication.service';
import {UserService} from '../services/user.service';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { User } from '../models/user';
import { Employee } from '../models/employee';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ViewChild} from '@angular/core'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];
  employees:Employee[];
  displayedColumns = ['BusinessEntityID', 'NationalIDNumber', 'JobTitle', 'Gender'];
  dataSource: MatTableDataSource<Employee>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor( private userRepository:UserRepositoryService,private alertService:AlertService,  private authenticationService: AuthenticationService,
    private userService: UserService) { 
      

    }

    // ngAfterViewInit() {
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // }
  
    applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
      this.dataSource.filter = filterValue;
    }

  loading = false;
  employee:any= [];
  ngOnInit() {
    
    this.userRepository.GetEmployeeList()
    .subscribe((data:any) => {
      this.employees = data;
      this.dataSource = new MatTableDataSource(this.employees);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      })
      }
ngOnDestroy() {
  // unsubscribe to ensure no memory leaks
  this.currentUserSubscription.unsubscribe();
}

}
