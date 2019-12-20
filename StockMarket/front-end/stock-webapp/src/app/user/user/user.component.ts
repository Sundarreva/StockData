import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: any;

  constructor(private authSer: AuthService) { }

  ngOnInit() {
  }

  userName() {
    return this.user =  this.authSer.getuserName();
  }

}
