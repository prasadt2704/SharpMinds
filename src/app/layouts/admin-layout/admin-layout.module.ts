import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,} from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { AdminLayoutRoutingModule, routes } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    DashboardComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    ComponentsModule,
    CommonModule,
    AdminLayoutRoutingModule
  ]
})
export class AdminLayoutModule { }
