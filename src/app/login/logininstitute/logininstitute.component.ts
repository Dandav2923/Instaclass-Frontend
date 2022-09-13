import { LoginInstituteService } from '../../service/login-institute.service';
import { Login } from '../../model/login';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-logininstitute',
  templateUrl: './logininstitute.component.html',
  styleUrls: ['./logininstitute.component.css']
})
export class LogininstituteComponent implements OnInit {

  form:FormGroup;

  constructor(private fb: FormBuilder,
    private loginInstituteService: LoginInstituteService) {
    this.form = this.fb.group({
      username:this.fb.control("",[Validators.required, Validators.minLength(4)]),
      password:this.fb.control("",[Validators.required, Validators.minLength(3), Validators.maxLength(15)] )
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.form.valid) {
      let login: Login = {
        username: this.form.get('username')?.value,
        password: this.form.get('password')?.value,
      }
      console.log(login);

      this.loginInstituteService.logInstitute(login)
      .subscribe(
        (res: any) => {
          this.loginInstituteService.usernameInstitute = res.username;
          console.log(res.username);
      },
        err => {
          console.log(err);
        }
      )
    }
  }
}
