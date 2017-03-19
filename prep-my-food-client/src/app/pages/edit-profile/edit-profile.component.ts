import { Preferences } from './../../test-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  preferences:any[] = Preferences;
  constructor() { }

  ngOnInit() {
  }

}
