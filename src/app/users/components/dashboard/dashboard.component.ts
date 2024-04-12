import { Component, OnInit, viewChild } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  user!: User | null
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.authService.userLogged$.subscribe(res => this.user = res)
  }



  logout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
