import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  OnChanges,
} from '@angular/core';
import { KatexOptions } from '../katex.options';
import { FormulaEditorService } from '../formula-editor.service';

@Directive({
  selector: '[appKatex]'
})
export class FormulaBlockDirective implements OnChanges {

  @Input('appKatex') equation: string;
  @Input('appKatexOptions') options?: KatexOptions;
  @Output() error = new EventEmitter();
  @Output() parsed = new EventEmitter();

  constructor(private element: ElementRef,
              private formulaEditorService: FormulaEditorService) { }

  ngOnChanges() {
    try {
      this.formulaEditorService.renderToElement(this.equation, this.element, this.options);
      this.parsed.emit('success');
    } catch (e) {
      this.error.emit(e);
    }
  }
}
