import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainlayoutComponent } from './main/mainlayout/mainlayout.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ControlnoComponent } from './pages/controlno/controlno.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { LoginComponent } from './pages/login/login.component';

import { PackagesComponent } from './pages/packages/packages.component';
import { PackeditComponent } from './pages/packedit/packedit/packedit.component';
import { PrintComponent } from './pages/print/print.component';
import { ReportComponent } from './pages/report/report.component';
import { GuardGuard } from './Safeguardcomponet/guard/guard.guard';

const routes: Routes = [
  {path:'Login',component:LoginComponent},
  {
    path:'print',
    component:PrintComponent
    
  },
 
  
  {path:'',component:MainlayoutComponent,
  canActivate:[GuardGuard],
   children:[
      {path:'package', component:PackagesComponent},
      {
        path:'edit-package/:id',
        component:PackeditComponent
      },
      { path:'customer',
        component:CustomerComponent
      },
      {
        path:'contol',
        component:ControlnoComponent
      },
      {
        path:'admin',
        component:AdminComponent
        
      },
      {
        path:'report',
        component:ReportComponent
        
      }
     
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
