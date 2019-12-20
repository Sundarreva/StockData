import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.css']
})
export class AddserviceComponent implements OnInit {

  stockExchange: any = {
    stockExchange : "",
    brief : "",
    address : "",
    remarks : "",
    logoUrl : ""
  };

  constructor(private adminSer : AdminService,private router: Router) { }

  ngOnInit() {
  }

  addingStockExchange(stockExchange){
    this.adminSer.addStockExchange(stockExchange).subscribe((response) => {
      this.router.navigate(['stockexchange','added']);
    });;
}

}
