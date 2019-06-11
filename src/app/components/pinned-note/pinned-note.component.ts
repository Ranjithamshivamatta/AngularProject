import { Component, OnInit } from '@angular/core';

import { MatDialog, MatSnackBar } from '@angular/material';
import { NoteService } from 'src/app/core/service/note/note.service';
import { Note } from 'src/app/core/model/note/note';

@Component({
  selector: 'app-pinned-note',
  templateUrl: './pinned-note.component.html',
  styleUrls: ['./pinned-note.component.css']
})
export class PinnedNoteComponent implements OnInit {

  public mytoken = '';
  public notes: Note[] = [];

  constructor(private noteService: NoteService, private dialog: MatDialog, private snackBar: MatSnackBar ) { }


  ngOnInit() {
    this.mytoken = localStorage.getItem('token');
    this.getNotes();
  }

  getNotes() {
    console.log('token', this.mytoken);
    this.noteService.retrieveNotes(this.mytoken).subscribe(newNote => {
      this.notes = newNote;
    }
    );
  }
  openDialog(note): void {
    const dialogRef = this.dialog.open(PinnedNoteComponent, {
      width: '550px',
      data: note
    });
    dialogRef.afterClosed().subscribe(() => {
      this.noteService.updateNote(note).subscribe(() => {
        this.snackBar.open('Note updated successfully', 'OK', {
          duration: 3000,
        });
      });
      console.log('The dialog was closed');
    });
  }

  sendToArchive(note) {
    const newNote = {
      ...note,
      isarchive: true
    };
    this.noteService.updateNote(newNote).subscribe(() => {
      this.snackBar.open('Sent to Archive ', 'OK', {
        duration: 3000,
      });
      this.getNotes();
    },
      (error) => {
        console.log('Error while archiving note::->', error);
      });
  }


  deleteNote(note) {
     const newNote = {
       ...note,
      intrash: true,
    };
     this.noteService.updateNote(newNote).subscribe(() => {
      this.snackBar.open('Sent to Trash ', 'OK', {
        duration: 3000,
      });
      this.getNotes();
    },
      (error) => {
        console.log('Error while deleting note::->', error);
      });
  }


  unPin(note) {
    const newNote = {
      ...note,
      ispinned: false

    };
    console.log(newNote);
    this.noteService.updateNote(newNote).subscribe(() => {
      this.snackBar.open(' Unpinned ', 'OK', {
        duration: 3000,
      });
      this.getNotes();
    },
      (error) => {
        console.log('Error while unpinning note::->', error);
      });
  }
}
