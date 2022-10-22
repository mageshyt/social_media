import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  username: string = 'magesh yt';
  userTag: string = '@mageshyt';
  userProfile: string = 'https://avatars.githubusercontent.com/u/70838644?v=4';
  userBio: string = '✨I am a full stack developer ✨';
  constructor() {}

  ngOnInit(): void {}
}
