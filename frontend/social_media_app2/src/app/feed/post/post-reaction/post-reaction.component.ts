import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { postLike, PostService } from "src/app/services/post.service";

@Component({
  selector: "app-post-reaction",
  templateUrl: "./post-reaction.component.html",
  styleUrls: ["./post-reaction.component.scss"],
})
export class PostReactionComponent implements OnInit {
  @Input() postId: any;

  @Output() showComment: EventEmitter<any> = new EventEmitter();
  constructor(private post: PostService) {}
  likeLoading: boolean = false;

  ngOnInit(): void {}

  likePost = () => {
    this.likeLoading = true;
    const currentUser = JSON.parse(localStorage.getItem("user") || "{}");
    const data: postLike = {
      user_id: currentUser.uid,
      post_id: this.postId,
    };

    this.post.likePost(data).subscribe((res: any) => {
      console.log(res);
      if (res.status === 200) {
        this.post.getAllPost();
      }
      this.likeLoading = false;
    });
  };

  showCommentBox = () => {
    this.showComment.emit();
  }
  
}
