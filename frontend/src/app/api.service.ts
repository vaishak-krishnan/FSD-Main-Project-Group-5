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

// to add new Student  

addstudent(data:any){
  return this.http.post(`${this.apiUrl}/add_student`, data)

}

// to delete student
deletestudent(id:any){
  return this.http.delete(`${this.apiUrl}/deletestudent/${id}`)
}


}
