import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProfileListServiceService} from "../services/profile-list-service.service";
import {User} from "../User";


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  //profile: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileListServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
    //   const id = +params.get('id')!;
    //   if (id) {
    //     this.profileService.getProfileById(id).subscribe(profile => {
    //       this.profile = profile;
    //     });
    //   }
    // });
  }


}
