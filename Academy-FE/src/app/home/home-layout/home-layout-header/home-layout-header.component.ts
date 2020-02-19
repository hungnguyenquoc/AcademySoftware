import { Component, OnInit, Inject, HostBinding, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
// import { WINDOW } from '../../../shared/helpers/window.helper';

@ Component({
  selector: 'app-home-layout-header',
  templateUrl: './home-layout-header.component.html',
  styleUrls: ['./home-layout-header.component.css']
})
export class HomeLayoutHeaderComponent implements OnInit {
  isCollapsed = false ;

  constructor(
    // @ Inject(DOCUMENT) private document: Document,
    // @ Inject(WINDOW) private window: Window
  ) { }
  isFixed;

  @ HostBinding('class.menu-opened') menuOpened = false;

  ngOnInit() {
  }
  @ HostListener('window:scroll', [])
  // onWindowScroll() {
  //   const offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
  //   if (offset > 10) {
  //     this.isFixed = true;
  //   } else {
  //     this.isFixed = false ;
  //   }
  // }

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }

}
