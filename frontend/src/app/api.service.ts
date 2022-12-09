import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl:String = 'http://localhost:3000'
  // apiUrl:String ='api'

  constructor(private http :HttpClient) { }

  // all end points are here

    //to fetch all students data list
getstudentsList(){
  return this.http.get(`${this.apiUrl}/adminapi/studentslist`)
}

// Get Studentby id 

getStudentById(_id:any){
  return this.http.get(`${this.apiUrl}/adminapi/getsinglestudent/${_id}`)
}

// to add new Student  

addstudent(data:any){
  return this.http.post(`${this.apiUrl}/adminapi/add_student`, data)

}
// update student
updateStudent(data: any, _id: any){
  return this.http.put(`${this.apiUrl}/adminapi/updateStudent`, { data, _id });

}

// to delete student
deletestudent(id:any){
  return this.http.delete(`${this.apiUrl}/adminapi/deletestudent/${id}`)
}

public formupdate: any;

}

