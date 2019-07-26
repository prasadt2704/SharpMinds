import { Component, OnInit } from '@angular/core';
import { UserLayoutComponent } from 'src/app/layouts/user-layout/user-layout.component';

declare interface RouteInfo {
    path: string;
    title: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard' },
    { path: 'exam', title: 'Online MCQ',  },
    { path: 'table-list', title: 'Time-Table', },
    { path: 'notifications', title: 'Notifications', },
    { path: 'userprofile', title: 'User Profile', },
    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}

