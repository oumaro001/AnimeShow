import { Component, OnInit ,Injectable} from '@angular/core';
import { AnimeApiService } from '../Services/Anime_Api/animeApi.service';
import { MangasModel } from '../Models/mangasModel';

@Component({
  selector: 'app-header',
  template:`<header id="header" *ngFor="let anime of arrayAnime ">
  <img src="{{anime.img_mangas}}" alt="">
  <div class="gradient">
  </div>
</header>
`,

  styleUrls: ['./header.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class HeaderComponent implements OnInit {
  api!:any;
  public arrayAnime:MangasModel [] = [];
  constructor(private animeApi: AnimeApiService) { }

  ngOnInit(){
    
    
    this.get();
    
  }
  
  get() : void{
    
    this.animeApi.getAllMangas()?.subscribe(response =>{
      this.arrayAnime = response;
      console.log(this.arrayAnime);
      this.api = this.arrayAnime[2];
      console.log(this.api);
      
      
  })
    
  }

 
}
