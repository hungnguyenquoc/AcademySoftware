import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { ProgramStudy } from '../models/programStudy';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramStudyService {

  constructor(private http: HttpClient, private api: ApiService) {}
  getProgramStudies(): Observable<ProgramStudy[]> {
    return this.http.get<ProgramStudy[]>(this.api.url.programstudies);
  }
  getProgramStudy(id: number): Observable<ProgramStudy> {
    return this.http.get<ProgramStudy>(
      this.api.url.programstudies + id
    );
  }
}
