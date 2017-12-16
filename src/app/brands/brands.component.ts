import { Component, OnInit } from '@angular/core';
import {LoggingService} from '../logging.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css'],
  providers: [DataService]
})
export class BrandsComponent implements OnInit {

  brands:any = [];

  constructor(private logger:LoggingService, private dataService: DataService) { }

  logIt(){
    this.logger.log();
  }

  ngOnInit() {
    this.dataService.fetchBrands().subscribe(
      (data) => this.brands = data
    );
  }

}
