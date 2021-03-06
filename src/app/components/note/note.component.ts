import { Component, OnInit, Output, EventEmitter, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MatSnackBar, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Note } from 'src/app/core/model/note/note';
import { HttpService } from 'src/app/core/service/http/http.service';
import { NoteService } from 'src/app/core/service/note/note.service';
import { KeepHelperService } from 'src/app/core/service/helper.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  public cardData: any;
  public buttons = [{
    name: 'notifications',
    tooltip: 'notifications'
  },
  {
    name: 'color_lens',
    tooltip: 'change color'
  },
  {
    name: 'person_add',
    tooltip: 'collaborator'
  }, {
    name: 'image',
    tooltip: 'image upload'
  },
  {
    name: 'archive',
    tooltip: 'archive'
  },
  {
    name: 'more_vert',
    tooltip: 'more'
  },
  {
    name: 'undo',
    tooltip: 'undo'
  }, {
    name: 'redo',
    tooltip: 'redo'
  }];

  public showHeader = true;
  createNoteForm: FormGroup;
  loading = false;
  submitted = false;
  public mytoken = localStorage.getItem('token');
  public notes: Note[] = [];

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
              private router: Router, private noteService: NoteService,
              private httpUtil: HttpService, private snackBar: MatSnackBar,
              private helper: KeepHelperService) { }

  ngOnInit() {
    this.getNotes();
    this.createNoteForm = this.formBuilder.group({
      title: [''],
      discription: ['']
    });
  }

  get f() { return this.createNoteForm.controls; }

  getNotes() {
    console.log('token', this.mytoken);
    this.noteService.retrieveNotes(this.mytoken).subscribe((newNote) => {
      this.notes = newNote;
    }
    );
  }
  onSubmit(note) {
    this.submitted = true;

    if (this.createNoteForm.invalid) {
      return;
    }
    if (this.createNoteForm.value.title === '' && this.createNoteForm.value.discription === '') {
      return;
    }
    console.log(this.mytoken);
    console.log(note);
    this.noteService.createNote(note).subscribe(response => {
      this.cardData = response;
      console.log(this.cardData);
      this.snackBar.open('success', 'note created', {
        duration: 2000
      });
      this.helper.refreshNote();
    },
      (error) => {
        console.log('Error while creating note::->', error);
      });
  }



}
