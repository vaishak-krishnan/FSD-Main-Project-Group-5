import { UseraddComponent } from './components/useradd/useradd.component';
import { PlacementofficerlistComponent } from './components/placementofficerlist/placementofficerlist.component';
import { TrainerlistComponent } from './components/trainerlist/trainerlist.component';
import { ProgramlistComponent } from './components/programlist/programlist.component';
import { BatclistComponent } from './components/batclist/batclist.component';
import { CourseslistComponent } from './components/courseslist/courseslist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentsComponent } from './components/addstudents/addstudents.component';
import { EditstudentsComponent } from './components/editstudents/editstudents.component';
import { LoginComponent } from './components/login/login.component';
import { StudentslistComponent } from './components/studentslist/studentslist.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'login' },

  {path:'login',component:LoginComponent},
  {path:'studentslist',component:StudentslistComponent},
  {path:'add-students',component:AddstudentsComponent},
  {path:'edit-students',component:EditstudentsComponent},

  {path:'add-user',component:UseraddComponent},
  {path:'trainerlist',component:TrainerlistComponent},
  {path:'placementofficerlist',component:PlacementofficerlistComponent},

  
  // path for admin settings
  {path:'batch-list',component:BatclistComponent},
  {path:'course-list',component:CourseslistComponent},
  {path:'program-list',component:ProgramlistComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
