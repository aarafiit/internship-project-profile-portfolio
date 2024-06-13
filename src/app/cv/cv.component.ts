import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileListServiceService } from '../services/profile-list-service.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  selectedProfile: any | null = null;
  descriptionArray: string[] = [];

  constructor(private route: ActivatedRoute, private profileService: ProfileListServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const profileId = Number(params.get('id'));
      this.profileService.getProfileById(profileId).subscribe((profile: any) => {
        this.selectedProfile = profile;
        this.descriptionArray = this.selectedProfile.skills.split(',');
      });
    });
  }
}
