import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { BehaviorSubject, take } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  username!: FormControl;
  password!: FormControl

  isLoginAttempt: boolean = true;
  isWrongAttempt$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.username = new FormControl(null, Validators.required);
    this.password = new FormControl(null, Validators.required)

    this.loginForm = this.fb.group({
      username: this.username,
      password: this.password,
      ruolo: 'Lettore'
    })
  }

  login(isLogin = true): void {
    if (isLogin) {
      this.isLoginAttempt = true;
      this.authService.login(this.loginForm.value).pipe(take(1))
        .subscribe(() => {
          if (this.authService.isLoggedIn) {
            this.router.navigate(['dashboard'])
          } else {
            this.isWrongAttempt$.next(true)
          }
        })
    } else {
      this.isLoginAttempt = false;
      this.authService.signIn(this.loginForm.value).pipe(take(1))
        .subscribe(res => {
          if (res) {
            this.authService.registerUser(this.loginForm.value).pipe(take(1))
              .subscribe(res => {
                if (res) this.login()
                else this.isWrongAttempt$.next(true)
              })
          } else {
            this.username.setErrors({ 'usernameinUse': true })
          }
        })
    }
  }

}
