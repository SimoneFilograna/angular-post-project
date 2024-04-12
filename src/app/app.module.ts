import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TopBarComponent } from './core/components/top-bar/top-bar.component';
import { PostModule } from './post/post.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UsersModule } from './users/users.module';





@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,

  ],
  imports: [
    PostModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UsersModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
