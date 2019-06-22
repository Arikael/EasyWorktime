import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worktime-list-item-mobile',
  templateUrl: './worktime-list-item-mobile.component.html',
  styleUrls: ['./worktime-list-item-mobile.component.scss']
})
export class WorktimeListItemMobileComponent implements OnInit {

  detailVisible = false;

  constructor() { }

  ngOnInit() {
  }

  toggleDetail() {
    this.detailVisible = !this.detailVisible;
  }
}
