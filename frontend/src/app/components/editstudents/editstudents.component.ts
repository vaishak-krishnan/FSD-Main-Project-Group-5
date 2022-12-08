import { StudentslistComponent } from './../studentslist/studentslist.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editstudents',
  templateUrl: './editstudents.component.html',
  styleUrls: ['./editstudents.component.css']
})
export class EditstudentsComponent implements OnInit {

  constructor(public api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getdata()

  }

  _id = this.api.formupdate;
  studentsdata: any ={
    student_name:'',
    contact_number:'',
    email_id:'',
    contact_address:'',
    course:'',
    batch:'',
    program:'',
    training_head:'',
    placement_officer:'',
    employment_status:'',
    course_status:''
    }

    getdata() {

      this.api.getStudentById(this._id).subscribe(res => {
        this.studentsdata = res;
        console.log("incoming data from update, get id", this._id);
        this.setoldvalue()
      });
    }

    updatestudentform: any = new FormGroup({
      student_name: new FormControl("", [Validators.required, Validators.minLength(5)]),
      contact_number: new FormControl("", [Validators.required, Validators.minLength(5)]),
      email_id: new FormControl("", [Validators.required, Validators.minLength(5)]),
      contact_address: new FormControl("", [Validators.required, Validators.minLength(5)]),
      course: new FormControl("", [Validators.required, Validators.minLength(5)]),
      batch: new FormControl("", [Validators.required, Validators.minLength(5)]),
      program: new FormControl("", [Validators.required, Validators.minLength(5)]),
      training_head: new FormControl("", [Validators.required, Validators.minLength(5)]),
      placement_officer: new FormControl("", [Validators.required, Validators.minLength(5)]),
      employment_status: new FormControl("", [Validators.required, Validators.minLength(5)]),
      course_status: new FormControl("", [Validators.required, Validators.minLength(5)]),
    })

    setoldvalue() {
      this.updatestudentform.setValue({
        student_name: this.studentsdata.student_name,
        contact_number: this.studentsdata.contact_number,
        email_id: this.studentsdata.email_id,
        contact_address: this.studentsdata.contact_address,
        course: this.studentsdata.course,
        batch: this.studentsdata.batch,
        program: this.studentsdata.program,
        training_head: this.studentsdata.training_head,
        placement_officer: this.studentsdata.placement_officer,
        employment_status: this.studentsdata.employment_status,
        course_status: this.studentsdata.course_status,
  
      })
    }


  updateStudent(){

    this.api.updateStudent(this.updatestudentform.value,this._id).subscribe((res) => {
      // this.blogerDatas = res;
      // console.log("incoming data from update form ",this.updatebookform.value);
    this.router.navigate(['/studentslist']);
    });
  }

}
