import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css'],
  providers: [DataService]
})
export class WeaponsComponent implements OnInit {

  weapons:any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchWeapons().subscribe(
      (data) => this.weapons = data
    );
  }

}
