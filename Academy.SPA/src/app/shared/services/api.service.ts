import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  // tslint:disable-next-line:member-ordering
  baseUrl = 'http://localhost:5000/api/';
  // tslint:disable-next-line:member-ordering
  url = {
    users: `${this.baseUrl}users`,
    majors: `${this.baseUrl}majors`,
    roles: `${this.baseUrl}roles`,
    programstudies: `${this.baseUrl}programstudies`,
    courses: `${this.baseUrl}courses`,
    openregisters: `${this.baseUrl}openregisters`,
    classes: `${this.baseUrl}classes`,
    // coursecategories: `${this.baseUrl}coursecategories`
  };
  
}
