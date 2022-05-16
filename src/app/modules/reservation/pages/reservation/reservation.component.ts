import { Component, OnInit } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HotelRoomTypeModel } from '../../models/reservation.model';
import { ReservationService } from '../../services';
import { FormBuilder, Validators } from '@angular/forms';
import { RoomBookingModel } from '@shared/models/room-booking.model';
import {Store} from '@ngrx/store';
import * as selectors from '../../state/selectors';
import * as actions from '../../state/actions';

@Component({
    selector: 'app-reservation',
    templateUrl: './reservation.component.html'
})

export class ReservationComponent implements OnInit  {

    formSent = false;
    startDate = new Date().toISOString().split('T')[0];
    dateBirth = '';
    endDate = '';
    hotelRoomType: any;
    hotelRoomType$ = this.store$.select(selectors.getResources);
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

    constructor(public formBuilder: FormBuilder, private store$: Store) {
        this.store$.dispatch(actions.initReservationPage());
        this.hotelRoomType = this.hotelRoomType$['actionsObserver']['_value']['resources'];
        this.dateDeparture();
        this.dateBirthLimit();
    }

    ngOnInit(): void {
        this.form.get('roomTypeId').setValue(0);
        this.form.get('countOfGuests').setValue(0);
        this.roomType();
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
    arrivalDate(): void {
        const startDate = this.form.get('startDate');
        const endDate = this.form.get('endDate');
        const date = new Date(startDate.value);
        date.setDate(new Date(startDate.value).getDate() + 1);
        this.endDate = date.toISOString().split('T')[0];
        if (startDate.value > endDate.value) {
            this.form.get('endDate').setValue(undefined);
        }
    }
    validation(valid: boolean): boolean {
        return this.formSent && valid;
    }
    onlyLetters(value: any): void {
        value.setValue(value.value.replace(/[^a-zа-яё\\s]/gi, ''));
    }
    roomType(): void {
        const roomTypeValue = this.form.get('roomTypeId').value;
        const withAnimal = this.form.get('withAnimal');
        if (Number(roomTypeValue) !== this.hotelRoomType[4].id) {
            withAnimal.enable();
        } else {
            this.form.controls.withAnimal.setValue(false);
            withAnimal.disable();
        }
        switch (Number(roomTypeValue)) {
            case 0:
                this.enabledOption('countOfGuests', 0, 0);
                this.disabledOption('countOfGuests', 1, 5);
                break;
            case 1:
                this.enabledOption('countOfGuests', 0, 1);
                this.disabledOption('countOfGuests', 2, 5);
                break;
            case 2:
                this.enabledOption('countOfGuests', 0, 3);
                this.disabledOption('countOfGuests', 4, 5);
                break;
            case 3:
                this.enabledOption('countOfGuests', 0, 5);
                break;
            case 4:
                this.enabledOption('countOfGuests', 0, 3);
                this.disabledOption('countOfGuests', 2, 5);
                break;
        }
        const currentGuest = this.form.get('countOfGuests').value;
        const getElementCountOfGuest = document.getElementById('countOfGuests');
        if (currentGuest !== '' && getElementCountOfGuest[currentGuest].disabled) {
            this.form.get('countOfGuests').setValue(undefined);
        }
    }
    enabledOption(idSelect: string, initial: number, finite: number): void {
        for (let i = initial; i <= finite; i++) {
            document.getElementById(idSelect)[i].disabled = false;
        }
    }
    disabledOption(idSelect: string, initial: number, finite: number): void {
        for (let i = initial; i <= finite; i++) {
            document.getElementById(idSelect)[i].disabled = true;
        }
    }
    onSubmit(form: any): void {
        if (form.valid) {
            const data: RoomBookingModel = {
                roomTypeId: Number(form.controls.roomTypeId.value),
                countOfGuests: Number(form.controls.countOfGuests.value),
                startDate: form.controls.startDate.value,
                endDate: form.controls.endDate.value,
                withAnimal: form.controls.withAnimal.value,
                user: {
                    firstName: form.controls.user.controls.firstName.value,
                    lastName: form.controls.user.controls.lastName.value,
                    patronymicName: form.controls.user.controls.patronymicName.value,
                    birthday: form.controls.user.controls.birthday.value
                }
            };
        }
        this.formSent = true;
    }
}
