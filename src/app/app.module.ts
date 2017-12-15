import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";
import {HttpClientModule} from '@angular/common/http';
import {LoggingService} from './logging.service';
import {DataService} from './data.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrandsComponent } from './brands/brands.component';
import { GearComponent } from './gear/gear.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { SubsComponent } from './subs/subs.component';
import { SpecialsComponent } from './specials/specials.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SubmitComponent } from './submit/submit.component';

const APP_ROUTES : Routes = [
  { path: 'brands', component: BrandsComponent},
  { path: 'gear', component: GearComponent},
  { path: 'abilities', component: AbilitiesComponent},
  { path: 'weapons', component: WeaponsComponent},
  { path: 'subs', component: SubsComponent},
  { path: 'specials', component: SpecialsComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'submit', component: SubmitComponent},
  { path: '', component: HomeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrandsComponent,
    GearComponent,
    AbilitiesComponent,
    WeaponsComponent,
    SubsComponent,
    SpecialsComponent,
    GalleryComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [LoggingService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
