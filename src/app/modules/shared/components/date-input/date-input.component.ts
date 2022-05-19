import { Component, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DateInputComponent), multi: true }
    ]
})
export class DateInputComponent implements ControlValueAccessor {
    @Input() formControlName: string;
    @Input() maxDate: string;
    @Input() minDate: string;
    @Input() labelText: string;
    @Input() form: FormGroup;

    @Output() onChange = new EventEmitter<any>();

    controlValueChanged = _ => { };

    writeValue(obj: any): void {}

    registerOnChange(fn: any): void {
        this.controlValueChanged = fn;
    }

    registerOnTouched(fn: any): void { }

    valueChanged(event): void {
        this.onChange.emit(event);
    }
}
