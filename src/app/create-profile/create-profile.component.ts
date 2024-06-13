import {Component, OnInit} from '@angular/core';
import {ProfileListServiceService} from '../services/profile-list-service.service';
import {Router} from '@angular/router';
import {profileDetail} from '../mock-info';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

  constructor(
    private profileService: ProfileListServiceService,
    private router: Router) {
  }

  ngOnInit(): void {}

  handleFormSubmit(form: any): void {
    const newId = profileDetail.length + 1;
    const newUser: any = {
      id: newId,
      firstName: form.firstName,
      designation: form.designation,
      email: form.email,
      contactNumber: form.contactNumber,
      degree1: form.degree1,
      degree2: form.degree2,
      passingYear1: form.passingYear1,
      passingYear2: form.passingYear2,
      institution1: form.institution1,
      institution2: form.institution2,
      skills: form.skills,
      jobTitle1: form.jobTitle1,
      jobTitle2: form.jobTitle2,
      jobQuitYear1: form.jobQuitYear1,
      jobQuitYear2: form.jobQuitYear2,
      description: form.description,
      jobDescription1: form.jobDescription1,
      jobDescription2: form.jobDescription2,
      referrerName1: form.referrerName1,
      referrerName2: form.referrerName2,
      referrerEmail1: form.referrerEmail1,
      referrerEmail2: form.referrerEmail2,
      referrerNo1: form.referrerNo1,
      referrerNo2: form.referrerNo2
    };
    this.profileService.addProfile(newUser);
    this.profileService.getProfiles().subscribe(() => {
      this.router.navigate(['/profile-list']);
    });

  }

}
