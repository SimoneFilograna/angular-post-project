import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HidePassPipe } from '../core/pipes/hide-pass.pipe';
import { EditUserComponent } from './components/edit-user/edit-user.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HidePassPipe,
    EditUserComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
  ]
})
export class UsersModule { }
