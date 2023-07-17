import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {
  emp_ = "  http://localhost:3000/employes"
  constructor(private http: HttpClient) { }

  addemploye(data: any):Observable<any> {
    return this.http.post(this.emp_, data)             //it will contain 2 paramenter one is link and another is data n here i am sending data thats why i am using 
  }                                                   //parametre to pass data

  updatedata(id:number , data: any):Observable<any> {
    return this.http.put(` http://localhost:3000/employes/${id}`, data)             //it will contain 2 paramenter one is link and another is data n here i am sending data thats why i am using 
  }


  getemploy():Observable<any> {
    return this.http.get(this.emp_)            
  }

  deleteemp(id:number){
    // return this.http.delete(this.emp_  ,${id})
    return this.http.delete(`${this.emp_}/${id}`)
  }




}
