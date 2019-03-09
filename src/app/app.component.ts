import {ChangeDetectionStrategy, Component} from '@angular/core';
import {KatexOptions} from './katex.options';
import {MatCheckboxChange} from '@angular/material';
import {ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  equation = 'c = \\pm\\sqrt{a^2 + b^2}';
  options: KatexOptions = {
    displayMode: true,
    throwOnError: false,
  };
  sidenavOpen = false;
  katexLog = '';
  tabIndex = 0;

  constructor(private cdRef: ChangeDetectorRef) {}

  openSidenav(): void {
    this.sidenavOpen = true;
  }

  updateDisplayMode(event: MatCheckboxChange): void {
    this.options.displayMode = event.checked;
    this.options = { ...this.options };
  }

  updateThrowOnError(event: MatCheckboxChange): void {
    this.options.throwOnError = event.checked;
    this.options = { ...this.options };
  }

  clearError(event: string): void {
    this.tabIndex = 0;
    this.katexLog = event;
    this.cdRef.detectChanges();
  }

  logKatexError(event: ErrorEvent): void {
    if (this.options.throwOnError) {
      this.tabIndex = 1;
    } else {
      this.tabIndex = 0;
    }
    this.katexLog = event.message;
    this.cdRef.detectChanges();
  }
}
