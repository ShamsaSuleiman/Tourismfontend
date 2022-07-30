import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private shamsa:HttpClient) { }

  login(email:String,password:String){
    return this.shamsa.get("http://localhost:8023/admin/login/email/"+email+"/password/"+password)
  }
}
