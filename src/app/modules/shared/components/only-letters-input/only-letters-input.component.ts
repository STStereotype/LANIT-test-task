import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-only-letters-input',
  templateUrl: './only-letters-input.component.html',
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => OnlyLettersInputComponent), multi: true }
    ]
})
export class OnlyLettersInputComponent implements ControlValueAccessor {
    @Input() formControlName: string;
    @Input() placeholder: string;
    @Input() labelText: string;
    @Input() form: FormGroup;

    controlValueChanged = _ => { };

    onlyLetters(value: any): void {
        value.setValue(value.value.replace(/[^a-zа-яё\\s]/gi, ''));
    }

    writeValue(obj: any): void {}

    registerOnChange(fn: any): void {
        this.controlValueChanged = fn;
    }

    registerOnTouched(fn: any): void { }
}
