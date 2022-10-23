import { AuthService } from "src/app/services/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  isGetUser = false;
  user?: any;

  constructor(private auth: AuthService) {}
  ngOnInit(): void {
    // if (!this.isGetUser) {
    //   this.auth.me().subscribe((res: any) => {
    //     if (res.data) {
    //       console.log("res", res.data);
    //       this.user = res.data;
    //     }
    //   });
    //   this.isGetUser = true;
    // }
  }
}
