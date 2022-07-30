import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  changepasswod:any
firstname:any
  constructor() {
    // const shama=JSON.parse(sessionStorage.getItem('shama')!)
    // this.firstname=shama.firstname
    
   }

  ngOnInit(): void {
  //const changepasswod=JSON.parse(sessionStorage.getItem('shamsa')!)
  //this.Admser.get(shamsa.id)
  }

}
