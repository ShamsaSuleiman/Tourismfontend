import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PackagesService } from '../../services/packages.service';

@Component({
  selector: 'app-packedit',
  templateUrl: './packedit.component.html',
  styleUrls: ['./packedit.component.css']
})
export class PackeditComponent implements OnInit {
  updateform !:FormGroup

  constructor(private router:Router,private pakegeService:PackagesService,private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.formConfigaration();
    this.route.params.subscribe((res:any)=>{
    console.log("id yangu ni =>",res);
    const x =res.id;
    this.fetchdatabyId(x);

    })
    

  }
  formConfigaration(){
    this.updateform=new FormGroup({
      id:new FormControl(''),
      name:new FormControl('',[Validators.required]),
      cost:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required]),
      startdate:new FormControl('',[Validators.required]),
      finishdate:new FormControl('',[Validators.required]),

      
    })
  
  }

  fetchdatabyId(id:number){
    this.pakegeService.getbyId(id).subscribe((response:any)=>{
      console.log("nimefanya nini =>",response);
      this.updateform.get("id")?.setValue(response.id);
      this.updateform.get("name")?.setValue(response.name);
      this.updateform.get("cost")?.setValue(response.cost);
      this.updateform.get("description")?.setValue(response.description);
      this.updateform.get("startdate")?.setValue(response.startdate);
      this.updateform.get("finishdate")?.setValue(response.finishdate);
    })
  }

  updatepackages(){
    const x =this.updateform.value;
    this.pakegeService.edit(x).subscribe((resp)=>{
      this.router.navigateByUrl("/package")
    })
  }


}
