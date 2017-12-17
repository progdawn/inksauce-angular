import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-subs',
  templateUrl: './subs.component.html',
  styleUrls: ['./subs.component.css'],
  providers: [DataService]
})
export class SubsComponent implements OnInit {

  subs:any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchSubs().subscribe(
      (data) => this.subs = data
    );
  }

}
