import { Component, ViewChild } from '@angular/core';
import moment from 'moment';
import { ScheduleFormComponent } from 'src/app/components/schedule-form/schedule-form.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(ScheduleFormComponent) form: any;
  date: string = new Date().toDateString()
  day: string = moment().format('dddd')
  constructor() {}
  setDate(newdate: string){
    this.date = newdate
    this.day = moment(newdate).format('dddd')
  }
}
