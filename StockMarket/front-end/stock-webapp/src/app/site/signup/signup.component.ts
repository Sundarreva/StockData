import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorMsg: string = null;

  flagForFields: boolean = false;
  
  userForm : User = {
    username: null,
    password: null,
    contactNumber: null,
    emailid: null
  };

  constructor(private router: Router, private userSer: UserService, private authSer: AuthService) { }

  ngOnInit() {
  }

  onClick(form) {
    this.userSer.getUserByName(form.value.ususername).subscribe((response: any) => {
      console.log(response);
      if(response != null) {
        this.flagForFields = true;
      } else {
        this.flagForFields = false;
      }
    });
  }

  onSubmitUser(userData) {
    
    if(this.flagForFields == false) {
      this.userForm.username = userData.ususername;
      this.userForm.contactNumber = userData.uscontactnumber;
      this.userForm.emailid = userData.usemailid;
      this.userForm.password = userData.uspassword;
      console.log(this.userForm);
      this.userSer.userSignup(this.userForm).subscribe((response) => {
        console.log(response);
        this.authSer.setSignupStatus(true);
        this.router.navigate(['/login']);  
      },

      (error) => {
        console.log(error);
        if(error.error.errorMessage == "User Already Exist") {
          console.log(this.errorMsg);
          this.errorMsg = "User Name has already registred try new name";
          console.log(this.errorMsg);
        }
      }
      
      
      )
    }

  }

}
