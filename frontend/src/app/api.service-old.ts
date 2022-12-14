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


//------------------------------------------  Students end points are here ------------------------------------------------- //

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

//------------------------------------------  Students end points ends here ------------------------------------------------- //

//------------------------------------------  settings end points are here ------------------------------------------------- //

// start batch

// to add batch
addbatch(data:any){
  return this.http.post(`${this.apiUrl}/adminapi/add_batch`, data)

}


//to fetch all batch data list
getbatchList(){
  return this.http.get(`${this.apiUrl}/adminapi/batchlist`)
}


// to delete batch
deletebatch(id:any){
  return this.http.delete(`${this.apiUrl}/adminapi/deletebatch/${id}`)
}


//end batch

// start course 

// to add course
addcourse(data:any){
  return this.http.post(`${this.apiUrl}/adminapi/add_course`, data)

}

//to fetch all course data list
getcourseList(){
  return this.http.get(`${this.apiUrl}/adminapi/courselist`)
}


// to delete course
deletecourse(id:any){
  return this.http.delete(`${this.apiUrl}/adminapi/deletecourse/${id}`)
}


//end course

// start program 

// to add program
addprogram(data:any){
  return this.http.post(`${this.apiUrl}/adminapi/add_program`, data)

}

//to fetch all program data list
getprogramList(){
  return this.http.get(`${this.apiUrl}/adminapi/programlist`)
}


// to delete program
deleteprogram(id:any){
  return this.http.delete(`${this.apiUrl}/adminapi/deleteprogram/${id}`)
}


//end program

//------------------------------------------  settings end points are here ------------------------------------------------- //







public formupdate: any;

}