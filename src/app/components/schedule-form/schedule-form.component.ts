import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.scss'],
})
export class ScheduleFormComponent implements OnInit {
  @Output() selectedDate = new EventEmitter();
  date: string = ''
  constructor() { }

  ngOnInit() {}
  emitDateSelected(newDate: string){
    this.selectedDate.emit(moment(newDate).format('MMMM D, YYYY'))
  }
}
