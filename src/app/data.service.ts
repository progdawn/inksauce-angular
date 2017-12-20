import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }
  
    fetchAbilities(){
      return this.http.get('./assets/data/abilities.json')
    }
    fetchBrands(){
      return this.http.get('./assets/data/brands.json')
    }
    fetchBrandsFB(){
      return this.http.get('https://inksauce-e5f42.firebaseio.com/.json')
    }
    fetchGear(){
      return this.http.get('./assets/data/gear.json')
    }
    fetchSpecials(){
      return this.http.get('./assets/data/specials.json')
    }
    fetchSubs(){
      return this.http.get('./assets/data/subs.json')
    }
    fetchWeapons(){
      return this.http.get('./assets/data/weapons.json')
    }
    fetchPics(){
      return this.http.get('./assets/data/pics.json')
    }
    // Added this for testing without using WAMP
    fetchMusic(){
      return this.http.get('./assets/data/music.json')
    }
    fetchMusicPHP(){
      return this.http.get('./app/music/music.php')
    }
}
