import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// tslint:disable-next-line: max-line-length
import { MatButtonModule, MatRippleModule, MatSelectModule, MatInputModule, MatToolbarModule, MatMenuModule, MatSidenavModule, MatListModule, MatDividerModule, MatTooltipModule, MatNativeDateModule, MatExpansionModule, MatGridListModule, MatSnackBarModule, MatSlideToggleModule,MatIconModule,MatCardModule, MatDialogModule, MatFormFieldModule
 } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
   MatIconModule,
    BrowserAnimationsModule,
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
   MatListModule,
   MatDividerModule,
   MatTooltipModule,
   MatNativeDateModule,
   MatExpansionModule,
   MatGridListModule,
   MatSnackBarModule,
   MatSlideToggleModule,
   MatDialogModule
  ],
  exports: [
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
   MatListModule,
   MatDividerModule,
   MatTooltipModule,
   MatNativeDateModule,
   MatExpansionModule,
   MatGridListModule,
   MatSnackBarModule,
   MatSlideToggleModule,
   MatDialogModule
  ]
})
export class AppMaterialModule { }
