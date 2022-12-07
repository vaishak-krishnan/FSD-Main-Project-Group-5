import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addstudents',
  templateUrl: './addstudents.component.html',
  styleUrls: ['./addstudents.component.css']
})
export class AddstudentsComponent implements OnInit {

  students:any=[]
 
  constructor(
    private apiService: ApiService,
    private router:Router,
    private route:ActivatedRoute
    ) { }
    data={
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
  

  ngOnInit(): void {
   
  }

  onSubmit(){
    this.apiService.addstudent(this.data).subscribe(res=>{
      this.students=res
      alert('successfully added');
      this.router.navigate(['/studentslist'])
    })
  }  
}