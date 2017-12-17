import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css'],
  providers: [DataService]
})
export class AbilitiesComponent implements OnInit {

  abilities:any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchAbilities().subscribe(
      (data) => this.abilities = data
    );
  }

}
