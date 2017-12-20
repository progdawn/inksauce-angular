import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

declare var firebase: any;

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css'],
  providers: [DataService]
})
export class BrandsComponent implements OnInit {

  brands:any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    //The commented code is for getting data with a json file instead of Firebase
    // this.dataService.fetchBrands().subscribe(
    //   (data) => this.brands = data
    // );

    this.fbGetData();
  }

  //Used to get json from Firebase instead of local file
  fbGetData(){
    firebase.database().ref('/').on('child_added', (snapshot) => {
      this.brands.push(snapshot.val())
    })
  }

}
