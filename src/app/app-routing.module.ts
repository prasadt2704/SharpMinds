import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';
const routes: Routes = [
 {
  path: '',
  redirectTo: 'login',
  pathMatch: 'full',
 },
 {
  path: 'login',
  component: LoginComponent,
 },
 {
   path: 'register',
   component: RegisterComponent,
 },
 {
   path: 'userin',
   loadChildren: './layouts/user-layout/user-layout.module#UserLayoutModule',
 },
 {
   path: 'admin',
   loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule',
 },
 {
   path: 'quiz',
   component: QuizComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            BrowserModule,
            CommonModule
            ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
