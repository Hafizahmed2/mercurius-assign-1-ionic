import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShiftsGridComponent } from './shifts-grid.component';

describe('ShiftsGridComponent', () => {
  let component: ShiftsGridComponent;
  let fixture: ComponentFixture<ShiftsGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftsGridComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShiftsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('tasks should have the an array of data', () => {
    expect(component.shifts).toBeInstanceOf(Array);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
