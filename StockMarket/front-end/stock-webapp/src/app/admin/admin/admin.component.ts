import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  stockData: any;
  filteredData: any

  constructor(private adminSer: AdminService) { }

  ngOnInit() {
    this.adminSer.getAllStockExchange().subscribe((response) => {
      console.log(response);
      this.stockData = response;
    });
  }

  
  

}
