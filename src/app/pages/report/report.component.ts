import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import { PackagesService } from '../services/packages.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  CustomerOrder:any[]=[]
  printdata:any;
  TotalCost: any

  constructor( private customerSevice:CustomerService,
    private router:Router,
    private packagesService: PackagesService
    ) { 

  }

  ngOnInit(): void {
    this.onFetch();
    this.getTotalCost();
  }
  onFetch() {
    this.customerSevice.getOrder().subscribe((res:any)=>{
      console.log(res);
      this.printdata = res;
      this.CustomerOrder=res;
    })
  }
  send(){
    this.customerSevice.result=this.customerSevice
  }
  Print(){
    this.customerSevice.data = this.printdata;
    this.router.navigateByUrl("print")
  }

  getTotalCost(){
    this.packagesService.getTotalCost().subscribe(res =>{
      console.log("total cost"+res)
      this.TotalCost = res
    })
    
  }
}


 
  