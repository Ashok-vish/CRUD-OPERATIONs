import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmppDetailComponent } from '../empp-detail/empp-detail.component';
import { EmpserviceService } from '../empservice.service';

import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private MatDialog:MatDialog ,  private servi: EmpserviceService){}    //matdialog is used to creating and managing the dialog
    
  displayedColumns: string[] = ['id', 'FirstName', 'LastName', 'Email', 'Qualifaction', 'Company', 'DOB','Experience', 'Package','Gender' , 'Action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  



  ngOnInit(): void {
    this.getemploylist()
  }

  edditform(){                                                            //it is used to  add member
    const MatDialogRef =this.MatDialog.open(EmppDetailComponent)
    MatDialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getemploylist()
        }
      }
    })
  }


 

  applyFilter(event: Event) {                                                //angular material
    const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getemploylist(){                                                          //  getemploy is taking data from json and 
    this.servi.getemploy().subscribe({
      next:(res)=>{this.dataSource=new MatTableDataSource(res)
      this.dataSource.sort=this.sort
    this.dataSource.paginator=this.paginator},
      error:(err)=>{console.error(err)}
    })
  }

  deleteemploy(id:any){                                    // delete button
    this.servi.deleteemp(id).subscribe({
      next:(res)=>{alert('employe has deleted'),
      this.getemploylist()
    },
      error:(err)=>{console.error(err)}
    })
  }


  eddituserdetail(data:any){                                                            //it is used to  add member
    const MatDialogRef= this.MatDialog.open(EmppDetailComponent,{
data,
     })
     MatDialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getemploylist()
        }
      }
    })
    
  }

  


}
