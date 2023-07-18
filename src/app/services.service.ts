import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  public notification=new Subject<string>()
  

  notify(data:any){
    this.notification.next(data)

  }

  
  
}
