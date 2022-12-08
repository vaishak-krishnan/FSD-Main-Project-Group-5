import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl:String = 'http://localhost:3000/api'
  // apiUrl:String ='api'

  constructor(private http :HttpClient) { }

  // all end points are here

    //to fetch all students data list
getstudentsList(){
  return this.http.get(`${this.apiUrl}/studentslist`)
}

// Get Studentby id 

getStudentById(_id:any){
  return this.http.get(`${this.apiUrl}/getsinglestudent/${_id}`)
}

// to add new Student  

addstudent(data:any){
  return this.http.post(`${this.apiUrl}/add_student`, data)

}
// update student
updateStudent(data: any, _id: any){
  return this.http.put('http://localhost:3000/api/updateStudent', { data, _id });

}

// to delete student
deletestudent(id:any){
  return this.http.delete(`${this.apiUrl}/deletestudent/${id}`)
}

public formupdate: any;

}

