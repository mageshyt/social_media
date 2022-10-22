import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-post-modal",
  templateUrl: "./post-modal.component.html",
  styleUrls: ["./post-modal.component.scss"],
})
export class PostModalComponent implements OnInit {
  userProfile: string = "https://avatars.githubusercontent.com/u/70838644?v=4";

  constructor() {}

  ngOnInit(): void {}
}
