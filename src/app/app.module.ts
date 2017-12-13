import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
