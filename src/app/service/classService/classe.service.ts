import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { CreateClassRequest } from '../../model/classes/createClassRequest';
import { catchError, Observable, throwError } from 'rxjs';
import { PutClassRequest } from '../../model/classes/putClassRequest';
import { CreateClassResponse } from '../../model/classes/createClassResponse';
import { PutClassResponse } from '../../model/classes/putClassResponse';
import { DeleteClassRequest } from '../../model/classes/deleteClassRequest';

@Injectable({
    providedIn: 'root',
})
export class ClassService{
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
    getInstituteInformation(idInstitute: number) {
        return this.http.get(
            `http://localhost:9191/institute/v1/institutes/${idInstitute}`
        )
    }

    getAllClass(idInstitute: number) {
        return this.http.get(
            `http://192.168.178.100:9191/class/v1/classes/getAllClasses/${idInstitute}`
        )
    }
    createClass(newClass: CreateClassRequest): Observable<CreateClassResponse> {
        return this.http.post<CreateClassResponse>(
            `http://localhost:9191/class/v1/classes`, newClass
        );
    }
    updateClass(updateClass: PutClassRequest): Observable<PutClassResponse>{
        return this.http.put<PutClassResponse>(`
            http://localhost:9191/class/v1/classes/updateClass`, updateClass
        );
    }
    deleteClass(deleteClass: DeleteClassRequest): Observable<unknown>{
        return this.http.delete(
            `http://localhost:9191/class/v1/classes/deleteClass`, {
                body: deleteClass
            }
        );
    }
}