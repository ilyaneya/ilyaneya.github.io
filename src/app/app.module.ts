import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';
import {AddTokenInterceptor} from './interceptor/token.interceptor';
import { UsersComponent } from './components/users/users.component';
import {UsersService} from './services/users.service';
import {UsersCanActivateGuard} from './guards/usersCanActivate.guard';
import {AuthCanActivateGuard} from './guards/authCanActivate.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {LoaderService} from './services/loader.service';
const routes: Routes = [
  {
  path: 'auth',
  component: AuthComponent,
    canActivate: [AuthCanActivateGuard]
},
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [UsersCanActivateGuard]
  },
  {
    path: '**',
    redirectTo: 'auth',
  }
];
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    UsersComponent
  ],
  exports: [
    RouterModule
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
    ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddTokenInterceptor,
      multi: true
    },
    UsersService,
    UsersCanActivateGuard,
    AuthCanActivateGuard,
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
