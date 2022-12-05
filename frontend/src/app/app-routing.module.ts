import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentsComponent } from './components/addstudents/addstudents.component';
import { EditstudentsComponent } from './components/editstudents/editstudents.component';
import { StudentslistComponent } from './components/studentslist/studentslist.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'home' },

  {path:'home',component:StudentslistComponent},
  {path:'add-students',component:AddstudentsComponent},
  {path:'edit-students/:id',component:EditstudentsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
