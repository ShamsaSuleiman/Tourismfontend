import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  result:any
  data:any;

  

  constructor(private http:HttpClient,private router:Router ) { }

  getOrder(){
    return this.http.get("http://localhost:8023/Touristorder/Vieworder")
  }
  getcustomer()
   { 
    return this.http.get("http://localhost:8023/customer/Viewcustomer")}
  

onPrintdata(){
  this.router.navigateByUrl("print").then(()=>{
    this.router.navigateByUrl("print")
    window.print();
    this.router.navigateByUrl("report")
  })
}
}





