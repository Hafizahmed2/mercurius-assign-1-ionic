import { Component, Input, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import moment from 'moment';

import SHIFTS_DATA from '../../../data/shifts.json'
@Component({
  selector: 'app-shifts-grid',
  templateUrl: './shifts-grid.component.html',
  styleUrls: ['./shifts-grid.component.scss'],
})
export class ShiftsGridComponent implements OnInit {
  @Input() date: string = new Date().toDateString();
  @Input() day: string = moment().format('dddd');
  shifts: string[][] = structuredClone(SHIFTS_DATA);
  shifts_hours: string[] = ['2300','0000','0600','0700','0800', '1300','1400','1500','1600']
  count: number = 0;
  constructor() {}

  ngOnInit() {
    this.shifts.forEach((e) => {
      this.count += e.length;
    });
  }
  resetShifts(){
    this.shifts = structuredClone(SHIFTS_DATA);
  }
  createCSV() {
    let csvData: string[][] = []
    let maxR: number = Math.max.apply(Math, this.shifts.map((row) => ( row.length ) ));
    Array(maxR).fill(0).map(() => csvData.push(new Array(9).fill('')))
    this.shifts.forEach((row,i) => {
      row.forEach((_,j) => {
        csvData[j][i] = this.shifts[i][j];
      })
    });
    new ngxCsv(csvData, `Schedule-${moment(this.date).format('yyyy-MM-DD')}`, {
      headers: this.shifts_hours,
    });
  }
  drop(event: CdkDragDrop<string[]>)  {
    if (event.previousContainer == event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
