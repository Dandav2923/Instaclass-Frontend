import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class VoteService {
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
    getAllVote(idClass: number) {
        return this.http.get(
            `http://192.168.178.100:9191/class/v1/votes/getAllVotes/${idClass}`
        )
    }
    getAllVoteByIdStudent(idClass: number, idStudent: number) {
        return this.http.get(
            `http://192.168.178.100:9191/class/v1/votes/getAllVotes/${idClass}/${idStudent}`
        )
    }
    getAllVoteByIdTeacher(idClass: number, idTeacher: number) {
        return this.http.get(
            `http://192.168.178.100:9191/class/v1/votes/getAllVotes/${idClass}/${idTeacher}`
        )
    }
}