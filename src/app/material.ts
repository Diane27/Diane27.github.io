import { NgModule } from '@angular/core';
import {
          MatToolbarModule,
          MatDialogModule,
          MatButtonModule,
          MatCardModule,
          MatChipsModule,
          MatProgressSpinnerModule,
          MatFormFieldModule,
          MatInputModule,
          MatRadioModule,
          MatSelectModule,
          MatIconModule,
          MatSidenavModule,
          MatDividerModule,
          MatMenuModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatMenuModule
  ],
  exports: [
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
