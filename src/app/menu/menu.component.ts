import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  navLinks = [
    {
      path: './worktime',
      text: 'Worktime',
      icon: 'access_time'
    },
    {
      path: './settings',
      text: 'Settings',
      icon: 'settings'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
