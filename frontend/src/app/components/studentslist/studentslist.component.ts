import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
<<<<<<< HEAD
import { Router } from '@angular/router';

=======
>>>>>>> 58fd3f7 (pushing from anusha)



@Component({
  selector: 'app-studentslist',
  templateUrl: './studentslist.component.html',
  styleUrls: ['./studentslist.component.css']
})
export class StudentslistComponent implements OnInit {

  students : any = []
  id:any

<<<<<<< HEAD
  constructor(private apiService: ApiService,  private router: Router) { }
=======
  constructor(private apiService: ApiService) { }
>>>>>>> 58fd3f7 (pushing from anusha)

  ngOnInit(): void {
    this.getstudentData();

  }

  
  getstudentData() {
    this.apiService.getstudentsList().subscribe(res => {
      this.students = res
    })
  }

<<<<<<< HEAD
  updatestudent(_id: any) {
    console.log(_id)
    this.apiService.formupdate = _id;
    this.router.navigate(['/edit-students']);
  }

=======
>>>>>>> 58fd3f7 (pushing from anusha)
  deletestudent(id:any){
    this.apiService.deletestudent(id).subscribe(res=>{
      this.getstudentData()
    })
  }

}
