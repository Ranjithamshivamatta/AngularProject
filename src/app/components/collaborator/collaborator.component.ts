// import { Component, OnInit, Input, Inject } from '@angular/core';
// import { Collaborator } from 'src/app/core/model/collaborator';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
// import { DomSanitizer } from '@angular/platform-browser';
// import { NoteService } from 'src/app/core/service/note/note.service';
// import { UserService } from 'src/app/core/service/user/user.service';
// import { user } from 'src/app/core/model/user/user';

// @Component({
//   selector: 'app-collaborator',
//   templateUrl: './collaborator.component.html',
//   styleUrls: ['./collaborator.component.css']
// })
// // export class CollaboratorComponent implements OnInit {

// //   constructor() { }

// //   ngOnInit() {
// //   }

// // }
// export class CollaboratorComponent implements OnInit {
//   @Input() users: user;
//   @Input()products;
//   picture: any
//   disc: String;
//   emails: []
//   collabUser: []
//    notes: []
//    OwnerEmailId:user
//    coUser:user
//   noteOwner:string
//   collaboratedUser: Collaborator
//   constructor(public dialog: MatDialog, private sanitizer: DomSanitizer, private noteService: NoteService,
//               public dialogRef: MatDialogRef<CollaboratorComponent>, private userService: UserService,
//               @Inject(MAT_DIALOG_DATA) public data, private snackBar: MatSnackBar
//   ) { }

//   public ngOnInit() {
//     var notes={
//       ...this.data
//     }
//     this.getUser();
//     this.userService.getCollUser().subscribe((resp: any) => {
//       this.emails = resp
//       console.log(resp)
//     }, (error) => console.log(error));
   
//     this.getNoteOwner();
//   }

//   public onNoClick(data): void {
//     this.dialogRef.close();
//     console.log(data)
//   }

//   public getUser() {
//     this.userService.getUser().subscribe((resp) => {
//       this.users = resp;
//       this.users = {
//         ...resp,
//         image: `data:image/text;base64, ${resp.image}`,
//       };
//       const url = `data:${resp.contentType};base64,${resp.image}`;
//       this.picture = {
//         imageSrc: this.sanitizer.bypassSecurityTrustUrl(url)
//       }
//       console.log(this.picture)
//     }, (error) => {
//       console.log(error)
//     })
//   }

//   public onAddCollab(email, note) {
//     const arry = JSON.stringify(this.data);
//     if (arry.search(email) === -1) {
//       this.getCollaboraterId(email).subscribe((resp: any) => {
//         this.coUser = resp;
//         const collaboratedUser =
//       {
//         collEmailId: email,
//         noteId: note.id,
//         ownerId:resp.id
//       };
//         this.noteService.doCollab(collaboratedUser).subscribe(resp => {
//         console.log(resp)
//         this.snackBar.open('added successfully', 'Ok', {
//           duration: 2000,
//         });
//       }, (error) => {
//         console.log(error);
//       })
//      });
//     } else {
//       this.snackBar.open('user already present', 'Ok', {
//         duration: 2000,
//       });
//     }
//   }

//   public deleteCollab(email, note, collId) {
//     let collaboratedUser =
//     {
//       id: collId,
//       collEmailId: email,
//       noteId: note.id

//     };
//     this.noteService.removeCollab(collaboratedUser).subscribe(resp => {
//       console.log(resp)
//     }, (error) => {
//       console.log(error)
//     })
//     console.log(this.data)
//   }

//   public getCollaboraterId(email) {
//     return this.userService.getCollUserId(email);
//   }  
  
//   public getNoteOwner(){
//     this.userService.getNoteOwner(this.data.userId).subscribe((resp:any)=>{
//       console.log(resp)
//       this.OwnerEmailId=resp;
//     },(error)=>{
//       console.log(error)
//     })
//   }
// }
