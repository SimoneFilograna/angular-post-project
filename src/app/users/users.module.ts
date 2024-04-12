import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HidePassPipe } from '../core/pipes/hide-pass.pipe';


@NgModule({
  declarations: [
    DashboardComponent,
    HidePassPipe
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
  ]
})
export class UsersModule { }
