import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-gear',
  templateUrl: './gear.component.html',
  styleUrls: ['./gear.component.css'],
  providers: [DataService]
})
export class GearComponent implements OnInit {

  gears:any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchGear().subscribe(
      (data) => this.gears = data
    );
  }

}