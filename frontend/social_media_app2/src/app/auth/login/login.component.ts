import { AuthService } from "src/app/services/auth.service";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  email = new FormControl("", [
    Validators.required,
    Validators.email,
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
  ]);
  password = new FormControl("", [Validators.required]);

  loginForm: any = new FormGroup({
    email: this.email,
    password: this.password,
  });

  constructor(
    private auth: AuthService,
    private router: Router,
    private tost: ToastrService
  ) {}

  ngOnInit(): void {}
  onSubmit() {
    const { email, password } = this.loginForm.value;
    try {
      this.auth.login(email, password).subscribe((res: any) => {
        if (res.status === "success") {
          this.tost.success("Login Successfull", "Success", {
            timeOut: 2000,
            progressBar: true,
            progressAnimation: "increasing",
            positionClass: "toast-top-right",
            closeButton: true,
          });
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data));
          //  call this me

          setTimeout(() => {
            this.router.navigate(["/"]);
          }, 1500);
        } else {
          this.tost.error("Login Failed", "Error", {
            timeOut: 2000,
            progressBar: true,
            progressAnimation: "increasing",
            positionClass: "toast-top-right",
            closeButton: true,
          });
        }
      });
    } catch (err) {
      console.log("something went wrong");
      this.tost.error("Login Failed", "Error", {
        timeOut: 2000,
        progressBar: true,
        progressAnimation: "increasing",
        positionClass: "toast-top-right",
        closeButton: true,
      });
    }
  }
}
