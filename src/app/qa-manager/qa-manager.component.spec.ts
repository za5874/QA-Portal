import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaManagerComponent } from './qa-manager.component';

describe('QaManagerComponent', () => {
  let component: QaManagerComponent;
  let fixture: ComponentFixture<QaManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
