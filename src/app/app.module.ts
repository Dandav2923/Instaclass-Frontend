import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { LoginstudentComponent } from './loginstudent/loginstudent.component';
import { LoginteacherComponent } from './loginteacher/loginteacher.component';
import { LogininstituteComponent } from './logininstitute/logininstitute.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginstudentComponent,
    LoginteacherComponent,
    LogininstituteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
