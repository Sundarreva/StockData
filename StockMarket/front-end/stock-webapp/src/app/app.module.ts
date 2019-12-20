import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './site/login/login.component';
import { SignupComponent } from './site/signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ImportexcelComponent } from './admin/importexcel/importexcel.component';
import { UserComponent } from './user/user/user.component';
import { UserprofileupdateComponent } from './user/userprofileupdate/userprofileupdate.component';
import { StockexchangeComponent } from './admin/stockexchange/stockexchange.component';
import { AddserviceComponent } from './admin/addservice/addservice.component';
import { SearchComponent } from './search/search.component';
import { CompanyComponent } from './admin/company/company.component';
import { UsercompanyComponent } from './user/usercompany/usercompany.component';
import { MailverifyComponent } from './site/mailverify/mailverify.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    HomepageComponent,
    AdminComponent,
    ImportexcelComponent,
    UserComponent,
    UserprofileupdateComponent,
    StockexchangeComponent,
    AddserviceComponent,
    SearchComponent,
    CompanyComponent,
    UsercompanyComponent,
    MailverifyComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
