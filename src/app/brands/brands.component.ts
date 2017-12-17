import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

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
    this.dataService.fetchBrands().subscribe(
      (data) => this.brands = data
    );
  }

}
