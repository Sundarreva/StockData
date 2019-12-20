import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companyData: any;
  filteredData: any;

  constructor(private adminSer: AdminService) { }

  ngOnInit() {
    this.adminSer.getAllCompany().subscribe((response) => {
      console.log(response);
      this.companyData = response;
      this.filteredData = this.companyData; 
    });
  }

  filterData($event) {
    this.filteredData = this.adminSer.getFilteredCompanies($event, this.companyData);
  }

}
