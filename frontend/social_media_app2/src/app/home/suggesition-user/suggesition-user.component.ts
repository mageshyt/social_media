import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-suggesition-user",
  templateUrl: "./suggesition-user.component.html",
  styleUrls: ["./suggesition-user.component.scss"],
})
export class SuggesitionUserComponent implements OnInit {
  @Input() userImg?: string;
  @Input() userName?: string;
  @Input() userTag?: string;

  constructor() {}

  ngOnInit(): void {}
}
