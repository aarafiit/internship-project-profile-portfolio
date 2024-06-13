import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ProfileListServiceService} from '../services/profile-list-service.service';
import {User} from '../User';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  profile !: User ;
  //@Input() profiles: User | any;
  @Output() formSubmit = new EventEmitter<User>();

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileListServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      designation: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      description: ['', Validators.required],
      skills: ['', Validators.required],
      degree1: ['', Validators.required],
      institution1: ['', Validators.required],
      passingYear1: ['', Validators.required],
      degree2: ['', Validators.required],
      institution2: ['', Validators.required],
      passingYear2: ['', Validators.required],
      jobTitle1: ['', Validators.required],
      jobQuitYear1: ['', Validators.required],
      jobDescription1: ['', Validators.required],
      jobTitle2: ['', Validators.required],
      jobQuitYear2: ['', Validators.required],
      jobDescription2: ['', Validators.required],
      referrerName1: ['', Validators.required],
      referrerEmail1: ['', [Validators.required, Validators.email]],
      referrerNo1: ['', Validators.required],
      referrerName2: ['', Validators.required],
      referrerEmail2: ['', [Validators.required, Validators.email]],
      referrerNo2: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      if (id) {
        this.profileService.getProfileById(id).subscribe(profile => {
          if (profile) {
            this.profile = profile;
            this.form.patchValue(this.profile);
          }
        });
      }
    });
  }


  onSubmit(): void {

    const updatedProfile = this.form.value as User;
    if (this.profile && this.profile.id) {
      this.profileService.updateProfile(this.profile.id, updatedProfile).subscribe(() => {
        console.log(updatedProfile.id)
        this.router.navigate(['/profile-list'])
      });
    } else {
      this.formSubmit.emit(updatedProfile);
    }
  }


}
