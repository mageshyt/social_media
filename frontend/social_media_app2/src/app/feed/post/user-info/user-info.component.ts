import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: "app-user-info",
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.scss"],
})
export class UserInfoComponent implements OnInit {
  @Input() username?: string ;
  @Input() userTag?: string  
  @Input()  userProfile?: string =
    "https://avatars.githubusercontent.com/u/70838644?v=4";
  constructor() {}

  ngOnInit(): void {}
}
