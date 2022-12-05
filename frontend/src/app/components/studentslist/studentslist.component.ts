import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';



@Component({
  selector: 'app-studentslist',
  templateUrl: './studentslist.component.html',
  styleUrls: ['./studentslist.component.css']
})
export class StudentslistComponent implements OnInit {

  students : any = []
  id:any

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getstudentData();

  }

  
  getstudentData() {
    this.apiService.getstudentsList().subscribe(res => {
      this.students = res
    })
  }

  deletestudent(id:any){
    this.apiService.deletestudent(id).subscribe(res=>{
      this.getstudentData()
    })
  }

}
