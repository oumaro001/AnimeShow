import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MangasModel } from 'src/app/Models/mangasModel';
import { AnimeApiService } from 'src/app/Services/Anime_Api/animeApi.service';



@Component({
  selector: 'app-mangas-by-id',
  templateUrl: './mangas-by-id.component.html',
  styleUrls: ['./mangas-by-id.component.css']
})
export class MangasByIdComponent implements OnInit {
  public Mangas: any 
  public id :any
  constructor(private mangasService : AnimeApiService,private router : Router , private route: ActivatedRoute,) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    this.getAllBook(this.id);
  }



  getAllBook(id : string){
  
    this.mangasService.getMangasById(id).subscribe(response =>{
      console.log(response);
      this.Mangas = response;   
    });
  
}

}