import { LogininstituteComponent } from './logininstitute/logininstitute.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginstudentComponent } from './loginstudent/loginstudent.component';
import { LoginteacherComponent } from './loginteacher/loginteacher.component';

const routes: Routes = [
  { path: '', component:  HomeComponent },
  { path: 'loginStudent', component: LoginstudentComponent },
  { path: 'loginInstitute', component: LogininstituteComponent },
  { path: 'loginTeacher', component: LoginteacherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
