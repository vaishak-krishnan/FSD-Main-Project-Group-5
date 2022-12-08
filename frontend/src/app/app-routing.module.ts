import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentsComponent } from './components/addstudents/addstudents.component';
import { EditstudentsComponent } from './components/editstudents/editstudents.component';
<<<<<<< HEAD
=======
import { LandingpageComponent } from './components/landingpage/landingpage.component';
>>>>>>> 58fd3f7 (pushing from anusha)
import { LoginComponent } from './components/login/login.component';
import { StudentslistComponent } from './components/studentslist/studentslist.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'login' },

  {path:'login',component:LoginComponent},
<<<<<<< HEAD
  {path:'studentslist',component:StudentslistComponent},
  {path:'add-students',component:AddstudentsComponent},
  {path:'edit-students',component:EditstudentsComponent}
=======
  {path:'landing',component:LandingpageComponent},
  {path:'studentslist',component:StudentslistComponent},
  {path:'add-students',component:AddstudentsComponent},
  {path:'edit-students/:id',component:EditstudentsComponent}
>>>>>>> 58fd3f7 (pushing from anusha)


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
