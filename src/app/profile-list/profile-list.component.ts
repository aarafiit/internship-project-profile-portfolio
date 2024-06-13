import {Component, OnInit} from '@angular/core';
import {profileDetail} from '../mock-info';
import {ProfileListServiceService} from '../services/profile-list-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  profileDetail = profileDetail;

  constructor(
    private profileService: ProfileListServiceService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.fetchProfiles();
  }

  fetchProfiles(): void {
    this.profileService.getProfiles().subscribe(profiles => this.profileDetail = profiles);
  }

  viewProfile(profile: any): void {
    this.router.navigate(['/view-profile/', profile.id])
  }

  updateProfile(profile: any): void {
    this.router.navigate(['/update-profile/', profile.id])
  }

  generateCV(profile: any): void {
    this.router.navigate(['/generate-cv/', profile.id])
  }


}
