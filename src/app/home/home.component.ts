import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LoggingService} from '../logging.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap/carousel/carousel-config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private logger:LoggingService, config: NgbCarouselConfig) {
    config.interval = 3000;
  }

  logIt(){
    this.logger.log();
  }

  ngOnInit() {
  }

}
