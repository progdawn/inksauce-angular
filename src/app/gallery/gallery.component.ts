import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [DataService]
})
export class GalleryComponent implements OnInit {

  pics:any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchPics().subscribe(
      (data) => this.pics = data
    );
  }

}
