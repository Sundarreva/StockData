import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stockexchange',
  templateUrl: './stockexchange.component.html',
  styleUrls: ['./stockexchange.component.css']
})
export class StockexchangeComponent implements OnInit {

  stockData: any;
  addStatus: any;

  constructor(private adminSer: AdminService, private router: ActivatedRoute) { }

  ngOnInit() {

    this.router.paramMap.subscribe((params) => {
      this.addStatus = params.get('status');
    })

    this.adminSer.getAllStockExchange().subscribe((response) => {
      console.log(response);
      this.stockData = response;
    });
  }
}
