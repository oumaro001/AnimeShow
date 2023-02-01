import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from '../app/Admin/administration/administration.component';
import { MangasByIdComponent } from './Admin/mangas-by-id/mangas-by-id.component';

const routes: Routes = [
  {path:"admin" , component:AdministrationComponent},
  {path:"mangasById/:id" , component:MangasByIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
