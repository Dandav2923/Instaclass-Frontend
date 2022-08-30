import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-logininstitute',
  templateUrl: './logininstitute.component.html',
  styleUrls: ['./logininstitute.component.css']
})
export class LogininstituteComponent implements OnInit {

  form:FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username:this.fb.control("",[Validators.required, Validators.minLength(4)]),
      password:this.fb.control("",[Validators.required, Validators.minLength(3), Validators.maxLength(15)] )
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.form.getRawValue());

  }

}
