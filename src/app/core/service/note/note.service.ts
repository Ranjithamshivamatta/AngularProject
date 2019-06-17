import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpUtil: HttpService, private router: Router, public snackBar: MatSnackBar) { }
getHeader(contentType = 'application/json') {
  const token = localStorage.getItem('token');
  return  {
    headers: new HttpHeaders({
      'Content-Type': contentType,
      token
    })
  };
}
  retrieveNotes(token): Observable<any> {
    const httpheaders = this.getHeader('application/x-www-form-urlencoded');
    return this.httpUtil.getService(environment.note_url + 'getNotes/' + token, httpheaders);
  }

  createNote(note): Observable<any> {
   const token = localStorage.getItem('token');
   const httpheaders = this.getHeader();
   return this.httpUtil.postServiceForNoteCreate(environment.note_url + 'createNote/' + token, httpheaders, note);
    }
  updateNote(note) {
    const token = localStorage.getItem('token');
    const httpheaders =  this.getHeader();
    return this.httpUtil.putServiceForNoteUpdate(environment.note_url + 'updateNote/' + token, note, httpheaders);
  }

  deleteNote(noteId) {
    const token = localStorage.getItem('token');
    const httpheaders = this.getHeader();
    return this.httpUtil.deleteServiceForNoteDelete(environment.note_url + 'deleteNote/' + noteId, httpheaders);
  }

//   public doCollab(collabUser) {
// // tslint:disable-next-line: prefer-const
//     let token = localStorage.getItem('token');
//     return this.httpUtil.putService(environment.note_url + '/add-collabarator/' + token, collabUser, {});
//   }

//   public removeCollab(collabUser) {
//     const token = localStorage.getItem('token');
//     return this.httpUtil.putService(environment.note_url + '/remove-collabarator/' + token, collabUser, {});
// }


}
