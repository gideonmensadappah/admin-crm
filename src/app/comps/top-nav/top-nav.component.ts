import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { from } from 'rxjs';
@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  userEmail:string;
  constructor(public router:Router) { }

  ngOnInit() {
    this.userEmail = '[user Email]';

  }
  logOutClick(){
 const q =  confirm("do you want to log out?")
   q? this.router.navigate(["logIn"]) : null
  }

}
