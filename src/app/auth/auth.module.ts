// USING ANGULAR MODULES & OPTIMIZING APPS USING SHARED MODULES IN ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    MatProgressSpinnerModule,
  ],
  exports: [SharedModule],
})
export class AuthModule {}
