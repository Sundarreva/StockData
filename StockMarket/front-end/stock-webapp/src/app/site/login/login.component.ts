import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorMessage: string = '';
  signupStatus: boolean = false;

  constructor(private authSer: AuthService,
    private userSer: UserService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.signupStatus = this.authSer.getSignupStatus();
  }

  login(loginForm: any) {
    this.authSer.authenticate(loginForm.value.username, loginForm.value.password).subscribe((response) => {
      
      this.authSer.setToken(response.token);
      this.authSer.setRole(response.role);
      this.authSer.setUserName(response.user);
      this.authSer.login();
      
      if(response.role == 'ROLE_ADMIN') {        
        this.router.navigate(['admin']);
      } else {
        this.router.navigate(['user']);
      }
    },
      (error) => {
        console.log(error);
        if(error.error == null) {
          this.errorMessage = 'Invalid User Name and Password';
        }
        else {
            this.errorMessage = 'Email verification is pending';          
        } 
      });
  }

}
