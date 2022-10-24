import { FormControl, Validators, FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from "@angular/fire/compat/storage";
import { v4 as uuidv4 } from "uuid";
import { AuthService } from "src/app/services/auth.service";
import { PostService } from "src/app/services/post.service";
@Component({
  selector: "app-post-modal",
  templateUrl: "./post-modal.component.html",
  styleUrls: ["./post-modal.component.scss"],
})
export class PostModalComponent implements OnInit {
  userProfile: string = "https://avatars.githubusercontent.com/u/70838644?v=4";
  file?: File;
  constructor(
    private storage: AngularFireStorage,
    private auth: AuthService,
    private post: PostService
  ) {}
  isUploaded: boolean = false;
  isPosting: boolean = false;
  setRenderImage: any = "";

  //Form
  title = new FormControl("", [Validators.required]);

  postForm = new FormGroup({
    title: this.title,
  });

  ngOnInit(): void {}

  async onDrop(event: any) {
    this.file = event.dataTransfer
      ? event.dataTransfer.files[0]
      : event.target.files[0];
    this.isUploaded = true;

    const render = new FileReader();
    if (this.file) {
      render.readAsDataURL(this.file);
    }
    render.onload = (File) => {
      this.setRenderImage = render.result;
      this.file = this.file;
    };
  }

  currentUser: any = JSON.parse(localStorage.getItem("user") || "{}");
  onPost() {
    console.log("posting");
    this.isPosting = true;
    let imageUrl;
    const authorId = this.currentUser.uid;

    console.log("authorId", this.file);
    if (this.file) {
      const id = uuidv4();
      const filePath = `posts/${id}.jpg`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, this.file);

      task.then((res) => {
        fileRef.getDownloadURL().subscribe((url) => {
          let postDoc = {
            postText: this.title.value,
            AuthorDetail: authorId,
            image: url,
          };
          this.post.createPOst(postDoc).subscribe((res: any) => {
            this.isPosting = false;
            this.title.setValue("");
            this.setRenderImage = "";
          });
        });
      });

      return;
    }

    let postDoc = {
      postText: this.title.value,
      AuthorDetail: authorId,
      postImage: imageUrl,
    };
    this.post.createPOst(postDoc).subscribe((res: any) => {
      this.isPosting = false;
      //! clear the form
      this.title.setValue("");
    });
  }
}
