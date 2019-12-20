import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './site/signup/signup.component';
import { LoginComponent } from './site/login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ImportexcelComponent } from './admin/importexcel/importexcel.component';
import { UserComponent } from './user/user/user.component';
import { UserprofileupdateComponent } from './user/userprofileupdate/userprofileupdate.component';
import { StockexchangeComponent } from './admin/stockexchange/stockexchange.component';
import { AddserviceComponent } from './admin/addservice/addservice.component';
import { CompanyComponent } from './admin/company/company.component';
import { UsercompanyComponent } from './user/usercompany/usercompany.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'stockexchange', component: StockexchangeComponent},
  {path: 'stockexchange/:status', component: StockexchangeComponent},
  {path: 'addstock', component: AddserviceComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'user', component: UserComponent},
  {path: 'usercompany', component: UsercompanyComponent},
  {path: 'userupdate', component: UserprofileupdateComponent},
  {path: 'import', component: ImportexcelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
