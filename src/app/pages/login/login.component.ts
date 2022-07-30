import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AdminService } from '../services/admin/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LOGINFORM!:FormGroup

 
  constructor(private router:Router,private loginserive:AdminService) { }


  ngOnInit(): void {
    this.configForm();
  }
configForm(){
  this.LOGINFORM=new FormGroup({
    email:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required)
  })
}

OnLogin(){

 if(this.LOGINFORM.valid){
  //sessionStorage.setItem("user",JSON.stringify(shamsa))
    this.loginserive.login(this.LOGINFORM.value.email,this.LOGINFORM.value.password).subscribe((shamsa)=>{
      sessionStorage.setItem("user",JSON.stringify(shamsa))
      console.log("data=>",shamsa)
        this.router.navigateByUrl("/package")
     })
   }
 }


  
  }
    

    



  




function shamsa(shamsa: any): string {
  throw new Error('Function not implemented.');
}

