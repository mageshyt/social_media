import { FormControl, Validators, FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { SuperbaseService } from "src/app/superbase/superbase.service";

@Component({
  selector: "app-post-modal",
  templateUrl: "./post-modal.component.html",
  styleUrls: ["./post-modal.component.scss"],
})
export class PostModalComponent implements OnInit {
  userProfile: string = "https://avatars.githubusercontent.com/u/70838644?v=4";
  file?: File;
  constructor(private superbase: SuperbaseService) {}
  isUploaded: boolean = false;
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

    console.log(this.file);

    return;
  }

  onPost() {
    console.log("posting", this.file);
    if (this.file) {
      this.superbase.uploadImage(this.file);
    }
  }
}
