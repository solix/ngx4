import { Component, OnInit } from '@angular/core';
import { DbService } from '../../shared/db.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-calendarlist',
  templateUrl: './calendarlist.component.html',
  styleUrls: ['./calendarlist.component.scss'],
  providers: [DbService],
})
export class CalendarlistComponent implements OnInit {
  items:Array<any>;
  constructor(private dbService: DbService) {
  }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.dbService.getList().subscribe(data => {this.items=data
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].firstletter = this.items[i].data.charAt(0).toUpperCase();
      }
    });
  }
}
