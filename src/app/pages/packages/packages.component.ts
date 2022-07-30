import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PackagesService } from '../services/packages.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  packageform!:FormGroup
  packegas!:any[]
  selectedFile:any
  @ViewChild('addform') addpackage!:TemplateRef<any>
  constructor(private dialog:MatDialog,private router:Router,private packageservice:PackagesService) { }


  ngOnInit(): void {
    this.formConfigaration()
    this.Viewpackages()
  }
  formConfigaration(){
    this.packageform=new FormGroup({
      name:new FormControl('',[Validators.required]),
      cost:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required]),
      startdate:new FormControl('',[Validators.required]),
      finishdate:new FormControl('',[Validators.required]),

      
    })

  }
  savepackages(){

    const values = new FormData();
    values.append('name',this.packageform.value.name)
    values.append('cost',this.packageform.value.cost)
    values.append('description',this.packageform.value.description)
    values.append('startdate',this.packageform.value.startdate)
    values.append('finishdate',this.packageform.value.finishdate)
    values.append('image',this.selectedFile)
    
    this.packageservice.addpackage(values).subscribe(result =>{
      this.Viewpackages()
      this.packageform.reset()
    })

  }

  onFileChanged(event:any){
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.selectedFile = file
    }
  }
  Viewpackages(){
    this.packageservice.viewpackage().subscribe((getpackegas:any) =>{
      this.packegas = getpackegas
    })
  }

  openAddPackage(){
    this.dialog.open(this.addpackage)
  }


  OnDelete(id:number){
   this.packageservice.deletePackage(id).subscribe((shamasa)=>{
     this.Viewpackages();
   })
  }

  OnEdit(packag:any){
    this.router.navigateByUrl('/edit-package/'+packag.id)
  }

}
