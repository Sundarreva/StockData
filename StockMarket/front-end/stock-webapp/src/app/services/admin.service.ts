import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  httpOptions: any;

  baseUrl = environment.baseUrl; 

  constructor(private httpClient: HttpClient, private authSer: AuthService) { }

  copyFile(file) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authSer.getToken()
      })
    };

    return this.httpClient.post(this.baseUrl+"upload-excel-service/excelfile/upload",file,{reportProgress: true, observe: 'events'});
    
  }

  getSummary() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authSer.getToken()
      })
    };

    return this.httpClient.get(this.baseUrl+"upload-excel-service/excelfile/summary",this.httpOptions);
  }

  getAllStockExchange() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authSer.getToken()
      })
    };

    return this.httpClient.get(this.baseUrl+"upload-excel-service/stockmarket/admin/stockexchange",this.httpOptions);
  }

  getAllCompany() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authSer.getToken()
      })
    };

    return this.httpClient.get(this.baseUrl+"upload-excel-service/stockmarket/company",this.httpOptions);
  }

  addStockExchange(stock) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authSer.getToken()
      })
    };

    return this.httpClient.post(this.baseUrl+"upload-excel-service/stockmarket/admin/stockexchange",stock,this.httpOptions);
  }

  getFilteredCompanies(searchStr, companyList) {
    let search = searchStr.toLocaleLowerCase();
    let filterItems = companyList.filter((company: any) =>
      company.name.toLocaleLowerCase().indexOf(search) != -1);
      return filterItems;
  }


}
