import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-param',
  templateUrl: './param.component.html',
  styleUrls: ['./param.component.scss']
})
export class ParamComponent implements OnInit {

  constructor(private ActivatedRoute: ActivatedRoute, private Router: Router , public service:ServicesService) {
    // this.ActivatedRoute.queryParams.subscribe(res=>{console.log(res)}) 
  }
  ngOnInit(): void {
    
  }


  senddata(ref:any){
    this.service.notify(ref)
  }

   
  
  

  

  // fun()={
  //   name: 'ashok',
  //   age:24,
  //   key1: value1,
  //   key2: value2,


  // }

 



  
}




