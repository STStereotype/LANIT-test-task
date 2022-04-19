import { Component, DoCheck, OnInit } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HotelRoomTypeModel } from '@shared/models/reservation.model';
import { ReservationService } from '../../services';
import { FormBuilder, Validators } from '@angular/forms';
import { RoomBookingModel } from '@shared/models/room-booking.model';

@Component({
    selector: 'app-reservation',
    templateUrl: './reservation.component.html'
})

export class ReservationComponent implements OnInit, DoCheck  {

    hotelRoomType: HotelRoomTypeModel[];
    form = this.formBuilder.group({
        roomTypeId: [0, Validators.required],
        countOfGuests: [1, Validators.required],
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
        withAnimal: [{value: false, disabled: false}],
        user: this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            patronymicName: ['', Validators.required],
            birthday: ['', Validators.required],
        })
    });

    constructor(private hotelRoomTypeService: ReservationService, public formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.hotelRoomTypeService.loadInfo().pipe(
            map(data => {
                this.hotelRoomType = data;
            }),
            catchError(error => {
                console.error(error);
                return [];
            })
        ).subscribe();
    }
    ngDoCheck(): void {
        this.countGuests();
        this.petsAllowed();
        if (Number(this.form.controls.roomTypeId.value) === 4) {
            this.form.controls.withAnimal.setValue(false);
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
           this.hotelRoomTypeService.sendInfo(data);
        }
    }

    onlyLetters(value: any): void {
        value.setValue(value.value.replace(/[^a-zа-яё\s]/gi, ''));
    }

    countGuests(): void {
        const roomTypeId = this.form.controls.roomTypeId.value;
        const value = this.form.controls.countOfGuests;
        if (value.value < 1) {
            value.setValue(1);
        }
        for (const { id } of this.hotelRoomType) {
            if (id === Number(roomTypeId)) {
                if (id === 0) {
                    value.setValue(1);
                } else if (id === 1 || id === 4) {
                    value.setValue(value.value > 2 ? 2 : value.value);
                } else if (id === 2) {
                    value.setValue(value.value > 4 ? 4 : value.value);
                } else if (id === 3) {
                    value.setValue(value.value > 6 ? 6 : value.value);
                }
            }
        }
    }

    petsAllowed(): void {
        const roomTypeValue = this.form.controls.roomTypeId.value;
        const withAnimal = this.form.controls.withAnimal;
        if (Number(roomTypeValue) !== this.hotelRoomType[4].id) {
            withAnimal.enable();
        } else {
            withAnimal.disable();
        }
    }
}
