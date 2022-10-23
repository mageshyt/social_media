import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
export type AuthUser = {
  id: string;
  userProfile:string
  firstname:string
  lastname:string
  userBio:string
  
};
@Component({
  selector: "app-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.scss"],
})
export class UserCardComponent implements OnInit {
  currentUser?: AuthUser;
  constructor(private auth: AuthService) {
    this.auth.me().subscribe((res: any) => {
      this.currentUser = res.data;
      
    });
  }

  ngOnInit(): void {}
}
