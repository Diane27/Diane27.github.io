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
          MatIconRegistry
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
    MatMenuModule,
  ],
  providers: [MatIconRegistry]
})
export class MaterialModule { 
  constructor(
    public matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
 }
