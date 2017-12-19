import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
  providers: [DataService]
})
export class MusicComponent implements OnInit {

  tunes:any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.phpGetMusic();
  }

  phpGetMusic() {
    this.dataService.fetchMusic().subscribe(
      (data) => this.tunes = data
    );
  }

}
