import { Injectable } from '@angular/core';

@ Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  baseUrl = 'http://localhost:5000/api/';
  url = {
    users: `${this.baseUrl}users`,
    majors: `${this.baseUrl}majors`,
    roles: `${this.baseUrl}roles`,
    programstudies: `${this.baseUrl}programstudies`,
    courses: `${this.baseUrl}courses`,
    openregisters: `${this.baseUrl}openregisters`,
    classes: `${this.baseUrl}classes`,
    students: `${this.baseUrl}students`
    // coursecategories: `${this.baseUrl}coursecategories`
  };
}
