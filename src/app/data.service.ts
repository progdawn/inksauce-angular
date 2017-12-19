import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }
  
    fetchAbilities(){
      return this.http.get('/data/abilities.json')
    }
    fetchBrands(){
      return this.http.get('/data/brands.json')
    }
    fetchGear(){
      return this.http.get('/data/gear.json')
    }
    fetchSpecials(){
      return this.http.get('/data/specials.json')
    }
    fetchSubs(){
      return this.http.get('/data/subs.json')
    }
    fetchWeapons(){
      return this.http.get('/data/weapons.json')
    }
    fetchPics(){
      return this.http.get('/data/pics.json')
    }
    fetchMusic(){
      return this.http.get('/app/music/music.php')
    }

}
