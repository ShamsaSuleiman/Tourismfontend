import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {
  result: any

  constructor(private http: HttpClient) { }


  addpackage(body: any) {
    return this.http.post("http://localhost:8023/tourismpackegasAPI/Regpackages", body)
  }
  viewpackage() {
    return this.http.get("http://localhost:8023/tourismpackegasAPI/Viewpackages")

  }
  deletePackage(id: number) {
    return this.http.delete("http://localhost:8023/tourismpackegasAPI/delete" + "/" + id);
  }
  getbyId(id: number) {
    return this.http.get("http://localhost:8023/tourismpackegasAPI/package/" + id)
  }
  edit(body: any) {
    return this.http.put("http://localhost:8023/tourismpackegasAPI/edit", body)
  }

  getTotalCost(){
    return this.http.get("http://localhost:8023/tourismpackegasAPI/getTotalCost")
  }
}

