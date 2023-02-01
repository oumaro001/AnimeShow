import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MangasModel } from 'src/app/Models/mangasModel';
import { AnimeApiService } from 'src/app/Services/Anime_Api/animeApi.service';


@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})

export class AdministrationComponent implements OnInit {
  public arrayMangas: any [] = [];
  public mangasList = false;
  public userList = false;

  constructor(private mangasService : AnimeApiService,private route : Router) { 
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

  console.log(id);
  
  /*let result = this.mangasService.getMangasById(id).subscribe(response =>{
       console.log(response);
       result = response;   
  })*/

  this.route.navigate(['mangasById/', id]);
}
}
