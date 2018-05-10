import { Component, OnInit } from '@angular/core';
import {Angular2TokenService} from "angular2-token";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public authTokenService:Angular2TokenService) { }

  ngOnInit() {
    
  }

}
