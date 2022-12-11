import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-placementofficerlist',
  templateUrl: './placementofficerlist.component.html',
  styleUrls: ['./placementofficerlist.component.css']
})
export class PlacementofficerlistComponent implements OnInit {

  users : any = [];
  id:any;
  searchText:any;

  constructor(private apiService: ApiService,  private router: Router) { }
 

  ngOnInit(): void {
    this.getuserData();
  }

  getuserData() {
    this.apiService.getuserList().subscribe(res => {
      this.users = res;
    })
  }

  
  deleteuser(id:any){
    this.apiService.deleteuserDetails(id).subscribe(res=>{
      this.getuserData()
    })
  }

}
