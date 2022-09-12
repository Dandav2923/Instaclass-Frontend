import { Component, OnInit } from '@angular/core';
import { GetClassNoteResponse } from 'src/app/model/classes/getClassNoteResponse';
import { GetClassResponse } from 'src/app/model/classes/getClassResponse';
import { ClassService } from 'src/app/service/classService/classe.service';
import { ClassNoteService } from 'src/app/service/classService/classNoteService';
@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  classes: GetClassResponse[] = [];
  classNotes: GetClassNoteResponse[] = [];
  constructor(
    private classService: ClassService,
    private classNoteService: ClassNoteService
  ) {
};

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
  };
  getAllClassNotes() {
    this.classNoteService.getAllClassNotes(1).subscribe(
      (data: any) => {
        let classNoteInfo = data;
        console.log(classNoteInfo);
        classNoteInfo.forEach((element: GetClassNoteResponse) => {
          console.log(element);
          this.classNotes.push(element);
        })
      },
      (this.classNoteService.handleError)
    )
  }
ngOnInit(): void {
  this.getAllClasses();
  this.getAllClassNotes();
  }
}
