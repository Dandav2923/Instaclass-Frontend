import { Component, OnInit } from '@angular/core';
import { GetClassResponse } from 'src/app/model/classes/getClassResponse';
import { ClassService } from 'src/app/service/classService/classe.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  classes: GetClassResponse[] = [];

  constructor(private classService: ClassService) { }

  getAllClasses() {
    this.classService.getAllClass(1).subscribe(
      (data: any) => {
        let className = data;
        console.log(className);
        className.forEach((element: GetClassResponse) => {
          console.log(element);
          this.classes.push(element);
        });
      },
      (this.classService.handleError)
    )
  }

  ngOnInit(): void {
    this.getAllClasses();
  }
}
