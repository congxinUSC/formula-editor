import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { KatexOptions } from '../katex.options';

@Component({
  selector: 'app-formula-block',
  templateUrl: './formula-block.component.html',
  styleUrls: ['./formula-block.component.css']
})
export class FormulaBlockComponent {

  @Input() equation: string;
  @Input() options?: KatexOptions;
  @Output() error = new EventEmitter();
  @Output() parsed = new EventEmitter();

  errorHandler(event): void {
    this.error.emit(event);
  }

  successHandler(event): void {
    this.parsed.emit(event);
  }

}
