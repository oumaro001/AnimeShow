import { Component, OnInit,ViewChild } from '@angular/core';
import { MangasModel } from 'src/app/Models/mangasModel';
import { AnimeApiService } from 'src/app/Services/Anime_Api/animeApi.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  public arrayMangas: MangasModel [] = [];
  public mangasList = false;
  public userList = false;

  constructor(private mangasService : AnimeApiService ) { 
  }
  ngOnInit(): void {
  }


getAllManags(){

  this.mangasList = true;
  this.mangasService.getAllMangas().subscribe(response => {
    this.arrayMangas = response;
    console.log(this.arrayMangas);
    
  })
 
}

getMangasById(id :string){

  this.mangasService.getMangasById(id).subscribe(response =>{
        //creation de composent MangasId
        // creation  de la route
  })
}
}
