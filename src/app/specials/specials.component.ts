import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.css'],
  providers: [DataService]
})
export class SpecialsComponent implements OnInit {

  specials:any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchSpecials().subscribe(
      (data) => this.specials = data
    );
  }

}
