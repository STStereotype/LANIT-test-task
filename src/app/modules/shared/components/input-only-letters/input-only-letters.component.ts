import {Component, Host, Input, OnInit} from '@angular/core';
import {ControlContainer, FormBuilder, FormGroup, FormGroupDirective} from '@angular/forms';

@Component({
    selector: 'app-input-only-letters',
    templateUrl: './input-only-letters.component.html',
    viewProviders: [
        {
            provide: ControlContainer,
            useExisting: FormGroupDirective
        }
    ]
})
export class InputOnlyLettersComponent implements OnInit{

    @Input() inputName: string;
    @Input() label: string;

    form: FormGroup;

    constructor(private fb: FormBuilder, @Host() private parentFor: FormGroupDirective) { }

    ngOnInit(): void {
        this.form = this.parentFor.form;
        this.form.addControl('user', this.fb.group({
            InputName: '',
        }));
        console.log(this.form);
    }

    onlyLetters(value: any): void {
        value.setValue(value.value.replace(/[^a-zа-яё\s]/gi, ''));
    }
}
