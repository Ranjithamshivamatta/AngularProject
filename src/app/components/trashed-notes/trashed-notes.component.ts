import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Note } from 'src/app/core/model/note/note';
import { NoteService } from 'src/app/core/service/note/note.service';

@Component({
  selector: 'app-trashed-notes',
  templateUrl: './trashed-notes.component.html',
  styleUrls: ['./trashed-notes.component.css']
})
export class TrashedNotesComponent implements OnInit {
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
    const dialogRef = this.dialog.open(TrashedNotesComponent, {
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



  deleteNoteForever(note) {
    console.log(note.noteId);
    this.noteService.deleteNote(note.noteId).subscribe(() => {
      this.snackBar.open('deleted Note forever', 'OK', { duration: 2000 });
// tslint:disable-next-line: no-unused-expression
    }), () => {
      this.snackBar.open('error', 'error to retrieve notes', { duration: 2000 });
    };
  }


  restore(note) {
    const newNote = {
      ...note,
      intrash: false,

    };
    console.log(newNote);
    this.noteService.updateNote(newNote).subscribe(() => {
      this.snackBar.open(' Restored ', 'OK', {
        duration: 3000,
      });
      this.getNotes();
    },
      (error) => {
        console.log('Error while restoring note::->', error);
      });
  }
  }
