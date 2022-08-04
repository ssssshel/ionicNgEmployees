import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-employee-profile',
  templateUrl: './edit-employee-profile.page.html',
  styleUrls: ['./edit-employee-profile.page.scss'],
})
export class EditEmployeeProfilePage implements OnInit {

  profileId: string;
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.profileId = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
