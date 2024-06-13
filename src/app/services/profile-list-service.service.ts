import {Injectable} from '@angular/core';
import {User} from '../User';
import {profileDetail} from '../mock-info';
import {Observable, of, BehaviorSubject} from 'rxjs';
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class ProfileListServiceService {


  constructor(private router: Router) {
  }

  getProfiles(): Observable<User[]> {
    return of(profileDetail);
  }

  addProfile(profile: any): void {
    profileDetail.push(profile)
  }

  getProfileById(id: number): Observable<any> {
    return of(profileDetail.find(profile => profile.id === id));
  }

  updateProfile(id: number, updatedData: User): Observable<boolean> {

    const index: number = profileDetail.findIndex(profile => profile.id === id);
    console.log("After Update" + profileDetail[index])
    profileDetail[index] = updatedData;
    console.log(index)
    console.log((updatedData));
    updatedData.id = id;
    console.log("After Update" + profileDetail[index])
    return of(true)

  }


}
