import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ControlnumberService {


  constructor(private http:HttpClient) { }
 addcontrolno(body:any){
   return this.http.post("http://localhost:8023/c/Regcontrol",body)
  }
  viewcontrolno(){
    return this.http.get("http://localhost:8023/c/Viewcontrol")
  
  }
  deletecontrolno(id:number){
    return this.http.delete("http://localhost:8023/controlnoAPI/delete"+"/"+id);
  }
  getbyId(id:number){
    return this.http.get("http://localhost:8023/controlnoAPI/package/"+id)
  }
   edit(body:any){
     return this.http.put("http://localhost:8023/controlnoAPI/edit",body)
   }
}









