import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'appForm',component:AppointmentFormComponent},
  {path:'appList',component:AppointmentListComponent},
  {path:'contactUs',component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
