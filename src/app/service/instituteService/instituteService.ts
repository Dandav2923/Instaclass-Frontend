import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root',
})
export class InstituteService {
    constructor(private http: HttpClient) { }

    getInstituteInformation(idInstitute: number) {
        return this.http.get(
            `http://localhost:9191/institute/v1/institutes/${idInstitute}`
        )
    }
    getInstituteUsername(instituteUsername: string) {
        return this.http.get(
            `http://localhost:9191/institute/v1/institutes/username/${instituteUsername}`
        )
    }
}