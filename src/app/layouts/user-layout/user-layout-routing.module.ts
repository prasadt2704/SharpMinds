import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserLayoutComponent } from './user-layout.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
//import { TableListComponent } from '../../table-list/table-list.component';
import { NotificationsComponent } from '../../notifications/notifications.component';

export const routes: Routes = [
  { path: '', 
    component: UserLayoutComponent,
    children: [
      {path: '', redirectTo:'dashboard', pathMatch: 'full'},
      {path:'dashboard', component: DashboardComponent},
      {path: 'userprofile',   component: UserProfileComponent },
      { path: 'notifications',  component: NotificationsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserLayoutRoutingModule { }
export const routingComponents = [DashboardComponent]