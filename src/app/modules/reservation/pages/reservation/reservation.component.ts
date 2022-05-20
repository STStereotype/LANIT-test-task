import { RoomReservationModel } from '@reservation/models/room-reservation.model';
import * as selectors from '@reservation/state/selectors';
import * as actions from '@reservation/state/actions';

import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { select, Store } from '@ngrx/store';

@Component({
    selector: 'app-reservation',
    templateUrl: './reservation.component.html'
})

export class ReservationComponent implements OnInit  {

    startDate = new Date().toISOString().split('T')[0];
    dateBirth = '';
    endDate = '';
    hotelRoomType: any;
    form = this.formBuilder.group({
        roomTypeId: ['', Validators.required],
        countOfGuests: ['', Validators.required],
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
        withAnimal: [{value: false, disabled: false}],
        user: this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            patronymicName: [''],
            birthday: ['', Validators.required],
        })
    });

    constructor(private formBuilder: FormBuilder, private store$: Store) {
        this.store$.dispatch(actions.initReservationPage());
    }

    ngOnInit(): void {
        this.store$.pipe(select(selectors.getResources)).subscribe((hotelRoomType) => {
            this.hotelRoomType = hotelRoomType;
            this.form.get('roomTypeId').setValue(this.hotelRoomType[0].id);
            this.roomTypeChanged();
        });
        this.dateDeparture();
        this.dateBirthLimit();
    }

    private dateBirthLimit(): void {
        const date = new Date();
        date.setDate(new Date().getDate() - 1);
        date.setFullYear(new Date().getFullYear() - 14);
        this.dateBirth = date.toISOString().split('T')[0];
    }

    private dateDeparture(): void {
        const date = new Date();
        date.setDate(new Date().getDate() + 1);
        this.endDate = date.toISOString().split('T')[0];
    }

    private withAnimals(roomTypeValue: string): void {
        const withAnimal = this.form.get('withAnimal');
        if (Number(roomTypeValue) === this.hotelRoomType[4].id) {
            this.form.controls.withAnimal.setValue(false);
            withAnimal.disable();
        } else {
            withAnimal.enable();
        }
    }

    roomTypeChanged(): void {
        const roomTypeValue = this.form.get('roomTypeId').value;
        this.withAnimals(roomTypeValue);
    }

    numberGuests(): any {
        switch (Number(this.form.get('roomTypeId').value)) {
            case 0:
                return Array(1);
            case 1:
            case 4:
                return Array(2);
            case 2:
                return Array(4);
            case 3:
                return Array(6);
        }
    }

    arrivalDate(): void {
        const startDate = this.form.get('startDate');
        const endDate = this.form.get('endDate');
        const date = new Date(startDate.value);
        date.setDate(new Date(startDate.value).getDate() + 1);
        this.endDate = date.toISOString().split('T')[0];
        if (startDate.value >= endDate.value) {
            endDate.setValue(undefined);
        }
    }

    isInvalid(control): boolean {
        return (control.touched || control.dirty) && control.invalid;
    }

    getAsFormGroup(abstractControl: AbstractControl): FormGroup {
        return abstractControl as FormGroup;
    }

    save(): void {
        if (this.form.valid) {
            const data: RoomReservationModel = {
                roomTypeId: Number(this.form.get('roomTypeId').value),
                countOfGuests: Number(this.form.get('countOfGuests').value),
                startDate: this.form.get('startDate').value,
                endDate: this.form.get('endDate').value,
                withAnimal: this.form.get('withAnimal').value,
                user: {
                    firstName: this.form.get('user.firstName').value,
                    lastName: this.form.get('user.lastName').value,
                    patronymicName: this.form.get('user.patronymicName').value,
                    birthday: this.form.get('user.birthday').value
                }
            };
            this.store$.dispatch(actions.sendResources({resources: data}));
        } else {
            this.form.markAllAsTouched();
        }
    }
}
