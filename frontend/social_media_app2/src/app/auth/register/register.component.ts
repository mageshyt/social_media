import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  email = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
  ]);
  password = new FormControl('', [Validators.required]);

  firstname = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
  ]);
  lastname = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
  ]);

  registerForm: any = new FormGroup({
    email: this.email,
    password: this.password,
    firstname: this.firstname,
    lastname: this.lastname,
  });

  constructor(
    private auth: AuthService,
    private router: Router,
    private tost: ToastrService
  ) {}

  onSubmit() {
    const { email, password, firstname, lastname } = this.registerForm.value;
    if (email && password && firstname && lastname) {
      const userDoc = this.registerForm.value;
      this.auth.register(userDoc).subscribe((res) => {
        this.tost.success('Register Successfull', 'Success');
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1500);
      });
    }
  }
  setLogin($event: any) {
    $event.preventDefault();
    this.router.navigate(['auth/login']);
  }
}
