import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  collapsed = true;

  userrole = localStorage.getItem('userrole');
  username = localStorage.getItem('username');
  isAdmin:boolean = false;
  isTH:boolean = false;
  isPO:boolean = false;
  constructor(public _auth: AuthService,private router : Router) { }

  ngOnInit(): void {
    if(this.userrole) {
      if(this.userrole === "Admin"){
        this.isAdmin = true;
      }
      else if(this.userrole === "Training Head"){
        this.isTH = true;
      }
      else if(this.userrole === "Placement Officer"){
        this.isPO = true;
      }      
    }
    else {
      this.logout();
    }
  }
  logout() {
    localStorage.removeItem('token')
    this.router.navigate([''])
  }
}

