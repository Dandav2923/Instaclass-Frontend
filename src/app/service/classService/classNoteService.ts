import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';





@Injectable({
    providedIn: 'root',
})
export class ClassNoteService{
    constructor(private http: HttpClient) { }
    
    handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            console.error('An error occurred:', error.error);
        } else {
            console.error(
                `Backend returned code ${error.status}, body was: `, error.error);
        }
        return throwError(() => new Error('Something bad happened; please try again later.'));
    }

    getAllClassNotes(idClass: number) {
        return this.http.get(
            `http://localhost:9191/class/v1/classNotes/getAllClassNotes/${idClass}`
        )
    }
    getAllClassNotesByTeacher(idTeacher: number) {
        return this.http.get(
            `http://localhost:9191/class/v1/classNotes/getAllClassNotes/1/${idTeacher}`
        )
    }
}