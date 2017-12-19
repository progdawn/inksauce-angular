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
    //this.phpGetMusic();
    this.getMusic();
  }

  // Added this for testing without using WAMP
  getMusic(){
    this.dataService.fetchMusic().subscribe(
      (data) => this.tunes = data
    );
  }

  phpGetMusic() {
    this.dataService.fetchMusicPHP().subscribe(
      (data) => this.tunes = data
    );
  }
}
