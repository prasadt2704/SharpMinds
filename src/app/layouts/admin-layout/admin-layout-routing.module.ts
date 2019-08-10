import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from '../../admin-dashboard/admin-dashboard.component';
import { AdminLayoutComponent } from './admin-layout.component';

export const routes: Routes = [
  { path: '', 
  component: AdminLayoutComponent,
  children: [
    {path: '', redirectTo:'admin', pathMatch: 'full'},
    {path:'admin', component: AdminDashboardComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
