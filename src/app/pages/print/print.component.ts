import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {
  customer:any

  constructor(private customerservise:CustomerService) 
  { }

  ngOnInit(): void {
    this.customer = this.customerservise.data
    console.log(this.customer);
    this.customerservise.onPrintdata();
    // console.log("fggggg=>",this.customerservise.result)
    
   
  }

  
  }





