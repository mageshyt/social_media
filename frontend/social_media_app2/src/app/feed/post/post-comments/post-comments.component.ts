import { Component, Input, OnInit } from "@angular/core";
import { format } from "timeago.js";
@Component({
  selector: "app-post-comments",
  templateUrl: "./post-comments.component.html",
  styleUrls: ["./post-comments.component.scss"],
})
export class PostCommentsComponent implements OnInit {
  @Input() postComments?: any;
  created_at: any;
  constructor() {}

  ngOnInit(): void {
    this.created_at = format(this.postComments?.created_at);
  }
}
