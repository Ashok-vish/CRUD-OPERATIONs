import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmpserviceService } from '../empservice.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

// import { from } from 'rxjs';



@Component({
  selector: 'app-empp-detail',
  templateUrl: './empp-detail.component.html',
  styleUrls: ['./empp-detail.component.scss']
})
export class EmppDetailComponent  implements OnInit {
  empform:FormGroup        // ! this symbol we use to make option when we mention in oninit but in this we mention in constructor so we do not need to used this!
  out:any=''



  foods:string[]=[                                 // it will contain only string type  in array  it will not add any number or other value
  "B.E",
  "B.tech",
  "B.Sc",
  "Poast Graduaction",
  "S.S.C",
  "H.S.C",
  "others"
]

constructor(private _fb:FormBuilder , private servi: EmpserviceService , private MatDialogRef:MatDialogRef<EmppDetailComponent>,
  @Inject(MAT_DIALOG_DATA) public data:any  
  
  ){
  this.empform=this._fb.group({
    FirstName:'',
    LastName:'',
    Email:'',
    DOB:'',
    Qualifaction:'',
    Company:'',
    Experience:'',
    Package:'',
    Gender:'',
    
  })

  }
  ngOnInit(): void {
    this.empform.patchValue(this.data)
  }

  onsubmit(){
    if(this.empform.valid){
      if(this.data){
        this.servi.updatedata(this.data.id ,   this.empform.value).subscribe({
          next:(val:any)=>{
            alert('employee updated successfully' ,),
            // this.empform(),
           
            this.MatDialogRef.close(true);
  
          },
          error:(err:any)=>{
            console.error(err)
          }
        })

      }
      else{
        this.servi.addemploye(this.empform.value).subscribe({
          next:(val:any)=>{
            alert('employee add successfully' ,),
            // this.empform(),
           
            this.MatDialogRef.close(true);
  
          },
          error:(err:any)=>{
            console.error(err)
          }
        })

      }
      // console.log(this.empform.value)
      
    }
  }




}



 


