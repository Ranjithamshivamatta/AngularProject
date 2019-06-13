import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class KeepHelperService {
    private subject = new Subject<any>();
    constructor() {
    }
    public refreshNote() {
        this.subject.next();
    }
    public getLatestNotes(): Observable<any> {
        return this.subject.asObservable();
    }
}
