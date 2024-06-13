import {Component, Input, OnInit} from '@angular/core';
import {User} from '../User';
import {ActivatedRoute} from '@angular/router';
import {ProfileListServiceService} from '../services/profile-list-service.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  selectedProfile: any | null = null;
  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileListServiceService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const profileId = Number(params.get('id'));
      this.profileService.getProfileById(profileId).subscribe((profile ?: User) => {
        this.selectedProfile = profile;
      });
    });
  }

}
