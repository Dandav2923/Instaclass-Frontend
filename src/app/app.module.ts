import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { LoginstudentComponent } from './login/loginstudent/loginstudent.component';
import { LoginteacherComponent } from './login/loginteacher/loginteacher.component';
import { LogininstituteComponent } from './login/logininstitute/logininstitute.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponentComponent } from './homepageInstitute/header-component/header-component.component';
import { MainComponentComponent } from './homepageInstitute/main-component/main-component.component';
import { FooterComponentComponent } from './homepageInstitute/footer-component/footer-component.component';
import { HomeInstituteComponentComponent } from './homepageInstitute/home-institute/home-institute-component.component';
import { ClassComponent } from './homepageInstitute/class/class.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginstudentComponent,
    LoginteacherComponent,
    LogininstituteComponent,
    HeaderComponentComponent,
    MainComponentComponent,
    FooterComponentComponent,
    HomeInstituteComponentComponent,
    ClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
