import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  CustomerData:any[]=[]

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.onFetch();

  }
  onFetch(){
    this.customerService.getcustomer() .subscribe((res:any)=>{
      this.CustomerData=res;
    })
  }

}
