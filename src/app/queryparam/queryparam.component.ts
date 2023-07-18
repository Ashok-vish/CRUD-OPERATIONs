import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-queryparam',
  templateUrl: './queryparam.component.html',
  styleUrls: ['./queryparam.component.scss']
})
export class QueryparamComponent implements OnInit{
  
data:any

  constructor(private Router:Router , private ActivatedRoute:ActivatedRoute, public ServicesService:ServicesService ){
    this.ActivatedRoute.params.subscribe(res=>{console.log(res)})
  }
  ngOnInit(): void {
    this.ServicesService.notification.subscribe(res=>{this.data=res})
  
  }

  // getdata(data:any){
  //   this.ServicesService.notify(data).subscribe(res=>{console.log(res)})
  // }











//  component1(){                                                 //using queryparam 
//   this.Router.navigate(["queryparam"],{
//     queryParams:{
//       name:'ashok',
//       age:25
//     }
//   } )
//  }


 


}
