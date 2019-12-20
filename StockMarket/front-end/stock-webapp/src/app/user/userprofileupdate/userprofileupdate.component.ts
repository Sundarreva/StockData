import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/site/signup/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofileupdate',
  templateUrl: './userprofileupdate.component.html',
  styleUrls: ['./userprofileupdate.component.css']
})
export class UserprofileupdateComponent implements OnInit {

  user: any;

  userForm : User = {
    username: null,
    password: null,
    contactNumber: null,
    emailid: null
  };

  constructor(private authSer: AuthService, private userSer: UserService, private router: Router) { }

  ngOnInit() {
    console.log(this.userName());
    this.userSer.getUserByName(this.userName()).subscribe((response: any) => {
      console.log(response);
      this.userForm.username = response.username;
      this.userForm.contactNumber = response.contactNumber;
      this.userForm.emailid = response.emailid;
    });
  }

  userName() {
    return this.user =  this.authSer.getuserName();
  }

  onSubmitUser(userData) {
    this.userForm.contactNumber = userData.uscontactnumber;
    if(userData.uspassword == userData.usconpassword) {
      this.userForm.password = userData.uspassword;
    }
    this.userSer.updateUser(this.userForm).subscribe((response) => {
      console.log(response);
      this.router.navigate(['user']);

    })

    
  }

}
