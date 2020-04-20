import { Component, OnInit } from '@angular/core';
import { Major } from '../../../_models/major';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent implements OnInit {
  major: Major;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.major = data['major']);
  }

}
