import { Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { PostService } from "./../../../services/post.service";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-comment-box",
  templateUrl: "./comment-box.component.html",
  styleUrls: ["./comment-box.component.scss"],
})
export class CommentBoxComponent implements OnInit {
  currentUser = JSON.parse(localStorage.getItem("user") || "{}");
  @Input() postId: any;
  constructor(private post: PostService) {}
  // comment group
  comment = new FormControl("", [Validators.required]);

  commentForm = new FormGroup({
    comment: this.comment,
  });
  ngOnInit(): void {}

  addComment() {
    console.log(this.commentForm.value);
    const comment = this.commentForm.value.comment;

    const user = this.currentUser;
    const commentData = {
      comment,
      post_id: this.postId as string,
      user,
    };
    console.log(commentData);
    this.post.comment(commentData).subscribe((res) => {
      console.log(res);
      this.post.getAllPost();
      //! clear the comment
      this.commentForm.reset();
    });
  }
}
