import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatChipsModule } from '@angular/material/chips';
import { ViewPostComponent } from './pages/view-post/view-post.component';
import { UnAuthComponent } from './pages/un-auth/un-auth.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './app.reducer';
import { UserEffect } from './ngrx/user/effects/user.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { PostsService } from './services/posts.service';
import { PostsEffect } from './ngrx/posts/effects/posts.effects';
import { AdminNamePipe } from './pipes/admin.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewPostComponent,
    UnAuthComponent,
    AdminNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatChipsModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([UserEffect, PostsEffect]),
    StoreDevtoolsModule.instrument({ logOnly: !isDevMode() })
  ],

  // SERVICES & DEPENDENCY INJECTION
  providers: [AuthService, UserService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
