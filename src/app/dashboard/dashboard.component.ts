import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor(private router:Router) { }

  ngOnInit() {
   
}

onClick(){
  window.alert("The Test would be of 10 minutes !!"+"\n Try to solve all the Questions");
}

notify(){
  this.router.navigate(["/userin/notifications"])
}
}