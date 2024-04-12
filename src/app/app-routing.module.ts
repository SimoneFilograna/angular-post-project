import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent } from './post/components/posts-list/posts-list.component';
import { authGuard } from './users/guards/auth.guard';



const routes: Routes = [
  { path: '', component: PostsListComponent },
  { path: 'login', loadComponent: () => import('./users/components/login/login.component').then(c => c.LoginComponent) },
  { path: 'dashboard', loadChildren: () => import('./users/users.module').then(m => m.UsersModule), canActivate: [authGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
