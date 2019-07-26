import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { AdminLayoutComponent } from './admin-layout.component';

export const routes: Routes = [
  { path: '', 
  component: AdminLayoutComponent,
  children: [
    {path: '', redirectTo:'dashboard', pathMatch: 'full'},
    {path:'dashboard', component: DashboardComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
