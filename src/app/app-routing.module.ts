import { LogininstituteComponent } from './login/logininstitute/logininstitute.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginstudentComponent } from './login/loginstudent/loginstudent.component';
import { LoginteacherComponent } from './login/loginteacher/loginteacher.component';
import { HomeInstituteComponentComponent } from './homepageInstitute/home-institute/home-institute-component.component';

const routes: Routes = [
  { path: '', component:  HomeComponent },
  { path: 'loginStudent', component: LoginstudentComponent },
  { path: 'loginInstitute', component: LogininstituteComponent },
  { path: 'loginTeacher', component: LoginteacherComponent },
  { path: 'homeInstitute', component: HomeInstituteComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
