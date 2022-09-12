import { Component, OnInit } from '@angular/core';
import { GetClassNoteResponse } from 'src/app/model/classes/getClassNoteResponse';
import { GetClassResponse } from 'src/app/model/classes/getClassResponse';
import { GetClassStudentResponse } from 'src/app/model/classes/getClassStudentResponse';
import { GetClassTeacherResponse } from 'src/app/model/classes/getClassTeacherResponse';
import { GetCommunicationResponse } from 'src/app/model/classes/getCommunicationResponse';
import { GetEventResponse } from 'src/app/model/classes/getEventResponse';
import { GetHomeworkResponse } from 'src/app/model/classes/getHomeworkResponse';
import { GetPresenceResponse } from 'src/app/model/classes/getPresenceResponse';
import { GetStudentNoteResponse } from 'src/app/model/classes/getStudentNoteResponse';
import { GetVoteResponse } from 'src/app/model/classes/getVoteResponse';
import { ClassService } from 'src/app/service/classService/classe.service';
import { ClassNoteService } from 'src/app/service/classService/classNoteService';
import { ClassStudentService } from 'src/app/service/classService/classStudentService';
import { ClassTeacherService } from 'src/app/service/classService/classTeacherService';
import { CommunicationService } from 'src/app/service/classService/comunicationService';
import { EventService } from 'src/app/service/classService/eventService';
import { HomeworkService } from 'src/app/service/classService/homeworkService';
import { PresenceService } from 'src/app/service/classService/presenceService';
import { StudentNoteService } from 'src/app/service/classService/studentNoteService';
import { VoteService } from 'src/app/service/classService/voteService';
@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  classes: GetClassResponse[] = [];
  classNotes: GetClassNoteResponse[] = [];
  classStudents: GetClassStudentResponse[] = [];
  classTeachers: GetClassTeacherResponse[] = [];
  communications: GetCommunicationResponse[] = [];
  events: GetEventResponse[] = [];
  homeworks: GetHomeworkResponse[] = [];
  presences: GetPresenceResponse[] = [];
  presencesByStudent: GetPresenceResponse[] = [];
  studentNotes: GetStudentNoteResponse[] = [];
  studentNotesByStudent: GetStudentNoteResponse[] = [];
  studentNotesByTeacher: GetStudentNoteResponse[] = [];
  votes: GetVoteResponse[] = [];
  votesByStudent: GetVoteResponse[] = [];
  votesByTeacher: GetVoteResponse[] = [];
  constructor(
    private classService: ClassService,
    private classNoteService: ClassNoteService,
    private classStudentService: ClassStudentService,
    private classTeacherService: ClassTeacherService,
    private communicationService: CommunicationService,
    private eventService: EventService,
    private homeworkService: HomeworkService,
    private presenceService: PresenceService,
    private studentNoteService: StudentNoteService,
    private voteService: VoteService
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
  getAllStudentByIdClass() {
    this.classStudentService.getAllStudentByIdClass(1).subscribe(
      (data: any) => {
        let classStudentInfo = data;
        classStudentInfo.forEach((element: GetClassStudentResponse) => {
          this.classStudents.push(element);
        })
      },
      (this.classStudentService.handleError)
    )
  }
  getAllTeacherByIdClass() {
    this.classTeacherService.getAllStudentByIdClass(1).subscribe(
      (data: any) => {
        this.classTeachers = data;  
      },
      (this.classTeacherService.handleError)
    )
  }
  getAllCommunications() {
    this.communicationService.getAllCommunicationByIdClass(1).subscribe(
      (data: any) => {
        this.communications = data;
      },
      (this.communicationService.handleError)
    )
  }
  getAllEvents() {
    this.eventService.getAllEventByIdClass(1).subscribe(
      (data: any) => {
        this.events = data;
      },
      (this.eventService.handleError)
    )
  }
  getAllHomeworks() {
    this.homeworkService.getAllHomeworkByIdClass(1).subscribe(
      (data: any) => {
        this.homeworks = data;
      },
      (this.homeworkService.handleError)
    )
  }
  getAllPresences() {
    this.presenceService.getAllPresencesByIdClass(1).subscribe(
      (data: any) => {
        this.presences = data;
      },
      (this.presenceService.handleError)
    )
  }
  getAllPresencesByIdStudent() {
    this.presenceService.getAllPresencesByIdStudent(1, 1).subscribe(
      (data: any) => {
        this.presencesByStudent = data
      }, 
      (this.presenceService.handleError)
    )
  }
  getAllStudentNotes() {
    this.studentNoteService.getAllStudentNote(1).subscribe(
      (data: any) => {
        this.studentNotes = data;
      },
      (this.studentNoteService.handleError)
    )
  }
  getAllStudentNotesByIdStudent() {
    this.studentNoteService.getAllStudentNoteByIdStudent(1, 1).subscribe(
      (data: any) => {
        this.studentNotesByStudent = data;
      },
      (this.studentNoteService.handleError)
    )
  }
  getAllStudentNotesByIdTeacher() {
    this.studentNoteService.getAllStudentNoteByIdTeacher(1, 1).subscribe(
      (data: any) => {
        this.studentNotesByTeacher = data;
      },
      (this.studentNoteService.handleError)
    )
  }
  getAllVotes() {
    this.voteService.getAllVote(1).subscribe(
      (data: any) => {
        this.votes = data;
      },
      (this.voteService.handleError)
    )
  }
  getAllVotesByStudent() {
    this.voteService.getAllVoteByIdStudent(1).subscribe(
      (data: any) => {
        this.votesByStudent = data;
      },
      (this.voteService.handleError)
    )
  }
  getAllVotesByTeacher() {
    this.voteService.getAllVoteByIdTeacher(1).subscribe(
      (data: any) => {
        this.votesByTeacher = data;
      },
      (this.voteService.handleError)
    )
  }
ngOnInit(): void {
  this.getAllClasses();
  this.getAllClassNotes();
  this.getAllStudentByIdClass();
  this.getAllTeacherByIdClass();
  this.getAllCommunications();
  this.getAllEvents();
  this.getAllHomeworks();
  this.getAllPresences();
  this.getAllPresencesByIdStudent();
  this.getAllStudentNotes();
  this.getAllStudentNotesByIdStudent();
  this.getAllStudentNotesByIdTeacher();
  this.getAllVotes();
  this.getAllVotesByStudent();
  this.getAllVotesByTeacher();
  }
}
