import { ElementRef, Injectable } from '@angular/core';
import { KatexOptions } from './katex.options';
import * as katex from 'katex';

@Injectable({
  providedIn: 'root'
})
export class FormulaEditorService {

  renderToElement(equation: string, element: ElementRef, options?: KatexOptions) {
    katex.render(equation, element.nativeElement, options);
  }

  renderToString(equation: string, options?: KatexOptions) {
    return katex.renderToString(equation, options);
  }
}
