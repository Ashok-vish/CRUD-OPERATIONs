import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QueryparamComponent } from './queryparam/queryparam.component';
import { ParamComponent } from './param/param.component';

const routes: Routes = [
  {path:"" , component:DashboardComponent },
  {path:"queryparam" , component:QueryparamComponent },
  // {path:"params/:id" , component:ParamComponent},
  {path:"param" , component:ParamComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
