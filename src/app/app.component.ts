import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud-operation';

  constructor(private Router:Router){}

  // component1(){
  //   this.Router.navigate(["queryparam"],{
  //     queryParams:{
  //       name:'ashok',
  //       age:25
  //     }
  //   }  )
  //  }

  
}
