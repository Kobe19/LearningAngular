import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppareilService } from "./service/appareil.service";
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule, Routes } from "@angular/router";
import { AuthService } from "./service/auth.service";
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuardService } from "./service/auth-guard.service";
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from "./service/user.service";
import { NewUserComponent } from './new-user/new-user.component';
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  { path: 'appareils', canActivate: [AuthGuardService], component: AppareilViewComponent },
  { path: 'appareils/:id', canActivate: [AuthGuardService], component: SingleAppareilComponent },
  { path: 'edit', canActivate: [AuthGuardService], component: EditAppareilComponent },
  { path: 'users', canActivate: [AuthGuardService], component: UserListComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', canActivate: [AuthGuardService], component: AppareilViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
