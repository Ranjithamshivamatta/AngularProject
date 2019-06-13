import { Component, OnInit } from '@angular/core';

import { UpdateNoteComponent } from '../update-note/update-note.component';
import { MatDialog, MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NoteComponent } from '../note/note.component';
import { NoteService } from 'src/app/core/service/note/note.service';
import { Note } from 'src/app/core/model/note/note';
import { KeepHelperService } from 'src/app/core/service/helper.service';

@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.component.html',
  styleUrls: ['./view-note.component.css']
})
export class ViewNoteComponent implements OnInit {
  public mytoken = '';
  public notes: Note[] = [];
  constructor(private noteService: NoteService,
              private helper: KeepHelperService,
              private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.errorSubsriber = this.errorSubsriber.bind(this);
  }


  ngOnInit() {
    this.mytoken = localStorage.getItem('token');
    this.getNotes();
    this.helper.getLatestNotes().subscribe(() => {
      this.getNotes();
    });
  }

  getNotes() {
    this.noteService.retrieveNotes(this.mytoken).subscribe((newNote) => {
      this.notes = newNote;
    }, this.errorSubsriber);
  }

  openDialog(note): void {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '550px',
      data: note
    });
    dialogRef.afterClosed().subscribe(result => {
      this.noteService.updateNote(note).subscribe(response => {
        this.snackBar.open('Note updated successfully', 'OK', {
          duration: 3000,
        });
      });
      console.log('The dialog was closed');
    });
  }



  deleteNote(note) {
    const newNote = {
      ...note,
      intrash: true,
    };
    this.noteService.updateNote(newNote).subscribe(response => {
      this.snackBar.open('Sent to Trash ', 'OK', {
        duration: 3000,
      });
      this.getNotes();
    }, this.errorSubsriber);
  }

  addLabel(note) {
    const newNote = {
      ...note,
      intrash: true,
    };
    this.noteService.updateNote(newNote).subscribe(response => {
      this.snackBar.open('Sent to Trash ', 'OK', {
        duration: 3000,
      });
      this.getNotes();
    }, this.errorSubsriber);
  }






  sendToArchive(note) {
    const newNote = {
      ...note,
      isarchive: true
    };
    this.noteService.updateNote(newNote).subscribe(response => {
      this.snackBar.open('Sent to Archive ', 'OK', {
        duration: 3000,
      });
      this.getNotes();
    }, this.errorSubsriber);
  }



  moveToPin(note) {
    console.log(' i am at move to pin');
    const newNote = {

      ...note,
      ispinned: true
    };
    this.noteService.updateNote(newNote).subscribe(response => {
      this.snackBar.open('Pinned', 'OK', {
        duration: 3000,
      });
      this.getNotes();
    }, this.errorSubsriber);

  }

  private errorSubsriber(error) {
    console.error('Error While getting Data::', error);
  }
}
