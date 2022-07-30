import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ControlnumberService } from '../services/controlnumber.service';

@Component({
  selector: 'app-controlno',
  templateUrl: './controlno.component.html',
  styleUrls: ['./controlno.component.css']
})
export class ControlnoComponent implements OnInit {
  Viewcontrol:any[]=[]
  ControlForm !:FormGroup
  @ViewChild('addform') addcontrol!:TemplateRef<any>
  controlno: any;
  controlnumberServive: any;
  ControlData: any;
constructor(private dialog:MatDialog,private router:Router,private controlnoservice:ControlnumberService) { }

//intialize all  methods
ngOnInit(): void {
    this.OnViewControl()
    this.configControl()
  }
  Viewpacontrlolno() {
    throw new Error('Method not implemented.');
  }
   configControl(){
     this.ControlForm= new FormGroup({
      controlno:new FormControl(null,Validators.required)
     })
   }

  OnViewControl(){
    this.controlnoservice.viewcontrolno().subscribe((shamsa:any)=>{
      this.Viewcontrol=shamsa;
      console.log("jsjsjjsjs=>",shamsa)
    })
  }
openAddControlno(){
    this.dialog.open(this.addcontrol)
  }


  OnDelete(id:number){
   this.controlnoservice.deletecontrolno(id).subscribe((shamasa)=>{
     this.Viewpacontrlolno();
   })
  }

  OnEdit(cont:any){
    this.router.navigateByUrl('/edit-controlno/'+this.controlno.id)
  }

  saveControlnum(){
    const con =this.ControlForm.value;
    console.log("wambea =>",con)
    this.controlnoservice.addcontrolno(con).subscribe((res)=>{
      console.log("suucesful");
      this.router.navigateByUrl("/control")
    })
    
  }
  

  OnFetch(){
    this.controlnumberServive.getcontrol().subscribe((res:any)=>{
      this.ControlData=res;
    })
  }
  

}












