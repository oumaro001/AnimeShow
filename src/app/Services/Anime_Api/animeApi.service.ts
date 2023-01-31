import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface myData {
  success: boolean,
  message: string
}

const baseUrl = 'http://localhost:5500/mangas';
@Injectable({
  providedIn: 'root'
})
export class AnimeApiService{
 
  constructor( public http : HttpClient) { 
  }

  getAllMangas(): Observable<any>{

    return this.http.get(baseUrl)
  }

  getMangasById(id : string): Observable<any>{

    return this.http.get(baseUrl+id)
  }
  
}

