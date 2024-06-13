import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { CvComponent } from './cv/cv.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import {CreateProfileComponent} from "./create-profile/create-profile.component";

const routes: Routes = [
  // {path : "" , component : AppComponent},
  { path: '', redirectTo: 'profile-list', pathMatch: 'full' },
  {path : "create-profile" , component : CreateProfileComponent},
  {path : "profile-list" ,component : ProfileListComponent},
  {path : "view-profile/:id" , component : ViewProfileComponent},
  {path : "generate-cv/:id" , component : CvComponent},
  {path : "update-profile/:id" , component : UpdateProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
