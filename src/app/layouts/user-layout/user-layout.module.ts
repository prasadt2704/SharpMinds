import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserLayoutRoutingModule, routes, routingComponents } from './user-layout-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLayoutComponent } from './user-layout.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';

//import { TableListComponent } from '../../table-list/table-list.component';
import { NotificationsComponent } from '../../notifications/notifications.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    UserLayoutRoutingModule,
  ],
  declarations: [
    routingComponents,
    UserLayoutComponent,
    UserProfileComponent,
    //TableListComponent,
    //UpgradeComponent,
    NotificationsComponent,
  ]
})

export class UserLayoutModule {}

