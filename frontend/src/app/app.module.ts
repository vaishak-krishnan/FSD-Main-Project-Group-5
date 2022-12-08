import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StudentslistComponent } from './components/studentslist/studentslist.component';
import { AddstudentsComponent } from './components/addstudents/addstudents.component';
import { EditstudentsComponent } from './components/editstudents/editstudents.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
<<<<<<< HEAD
import { CoursesComponent } from './components/courses/courses.component';
import { BatchesComponent } from './components/batches/batches.component';
import { ProgramsComponent } from './components/programs/programs.component';
=======
import { LandingpageComponent } from './components/landingpage/landingpage.component';
>>>>>>> 58fd3f7 (pushing from anusha)

@NgModule({
  declarations: [
    AppComponent,
    StudentslistComponent,
    AddstudentsComponent,
    EditstudentsComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
<<<<<<< HEAD
    CoursesComponent,
    BatchesComponent,
    ProgramsComponent
=======
    LandingpageComponent
>>>>>>> 58fd3f7 (pushing from anusha)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule


  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
