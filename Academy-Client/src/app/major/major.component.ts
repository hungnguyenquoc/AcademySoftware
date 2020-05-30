import { Component, OnInit } from '@angular/core';
import { MajorService } from '../_services/major.service';
import { Major } from '../_models/major';

@Component({
  selector: 'app-major',
  templateUrl: './major.component.html',
  styleUrls: ['./major.component.css']
})
export class MajorComponent implements OnInit {
  majorsList: Major[];
  constructor(private majorService: MajorService) { }

  ngOnInit(): void {
    this.majorService.getMajors().subscribe(data => this.majorsList = data);
  }

}
