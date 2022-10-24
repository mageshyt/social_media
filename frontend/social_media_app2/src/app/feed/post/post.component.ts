import { Component, Input, OnInit } from "@angular/core";
import { PostService } from "src/app/services/post.service";
import { format } from "timeago.js";
import { postType } from "../feed.component";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
  @Input() post?: postType;

  timeStamp: string = "";
  likesCount?: any;
  commentsCount?: any;
  retweetCount?: any;
  numberFormatter = (num: any) => {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + "K"; // convert to K for number from > 1000 < 1 million
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1) + "M"; // convert to M for number from > 1 million
    } else if (num < 900) {
      return num; // if value < 1000, nothing to do
    }
  };
  postAuthor?: any;
  constructor(private post_service: PostService) {}

  ngOnInit(): void {
    if (this.post) {
      this.timeStamp = format(this.post.created_at);
      this.likesCount = this.numberFormatter(this.post?.likesCount);
      this.commentsCount = this.numberFormatter(this.post?.commentsCount);
      this.retweetCount = this.numberFormatter(this.post?.retweetCount);
      if (typeof this.post.AuthorDetail === "string") {
        this.post_service
          .getAuthorPost(this.post.AuthorDetail as string)
          .subscribe((data:any) => {
            console.log(data);
            this.postAuthor = data.data;
          });

          
      }
    }
  }
}
