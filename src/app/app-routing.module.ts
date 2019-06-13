import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ViewNoteComponent } from './components/view-note/view-note.component';
import { ArchiveNotesComponent } from './components/archive-notes/archive-notes.component';
import { TrashedNotesComponent } from './components/trashed-notes/trashed-notes.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';


const appRoutes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'home', component: HomeComponent ,
  children: [

    { path: '', redirectTo: 'viewnotes', pathMatch: 'full' },
    { path: 'archivenote', component: ArchiveNotesComponent},
    { path: 'trashednote', component: TrashedNotesComponent},
    { path: 'viewnotes', component: ViewNoteComponent }
  ]

},
{path: 'resetpassword/:id', component: ResetpasswordComponent},
{path: 'forgotpassword', component: ForgotpasswordComponent},
  { path: '**', redirectTo: 'login' , pathMatch: 'full'}
 ];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
    })
    export class AppRoutingModule { }

