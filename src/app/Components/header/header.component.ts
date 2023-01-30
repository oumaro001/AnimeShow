import { Component, OnInit ,Injectable} from '@angular/core';
import { AnimeApiService } from '../../Services/Anime_Api/animeApi.service';
import { MangasModel } from '../../Models/mangasModel';

@Component({
  selector: 'app-header',
  templateUrl:'./header.component.html',
  styleUrls: ['./header.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class HeaderComponent implements OnInit {
  public arrayAnime:MangasModel [] = [];
  public numeroRandom!: number;
  constructor(private animeApi: AnimeApiService) { }

  ngOnInit(){
    this.animeApi.getAllMangas()?.subscribe(response =>{
    this.arrayAnime = response;
    this.numeroRandom = Math.floor(Math.random() * this.arrayAnime.length);
    console.log(this.arrayAnime , this.numeroRandom);   
    } )
  
  
  }
    
    
    
    
    }
  
  

  
  



 

