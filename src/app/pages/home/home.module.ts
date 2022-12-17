import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderComponent } from '../../components/header/header.component';
import { ScheduleFormComponent } from '../../components/schedule-form/schedule-form.component';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ShiftsGridComponent } from 'src/app/components/shifts-grid/shifts-grid.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    DragDropModule,
    ScrollingModule
  ],
  declarations: [HomePage, HeaderComponent, ScheduleFormComponent, ShiftsGridComponent]
})
export class HomePageModule {}
