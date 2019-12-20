import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-usercompany',
  templateUrl: './usercompany.component.html',
  styleUrls: ['./usercompany.component.css']
})
export class UsercompanyComponent implements OnInit {

  companyData: any;
  filteredData: any;
  user: any;

  constructor(private adminSer: AdminService, private authSer: AuthService) { }

  ngOnInit() {
    this.adminSer.getAllCompany().subscribe((response) => {
      console.log(response);
      this.companyData = response;
      this.filteredData = this.companyData; 
    });
  }

  
  userName() {
    return this.user =  this.authSer.getuserName();
  }

  filterData($event) {
    this.filteredData = this.adminSer.getFilteredCompanies($event, this.companyData);
  }

}
