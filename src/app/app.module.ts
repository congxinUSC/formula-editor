import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AngularSplitModule } from 'angular-split';

import { AppComponent } from './app.component';
import { FormulaBlockComponent } from './formula-block/formula-block.component';
import { FormulaBlockDirective } from './formula-block/formula-block.directive';
import { FormulaEditorService } from './formula-editor.service';

@NgModule({
  declarations: [
    AppComponent,
    FormulaBlockComponent,
    FormulaBlockDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    FormsModule,
    AngularSplitModule.forRoot(),
  ],
  providers: [FormulaEditorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
