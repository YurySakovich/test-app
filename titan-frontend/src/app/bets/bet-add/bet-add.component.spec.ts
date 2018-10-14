import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetAddComponent } from './bet-add.component';

describe('BetAddComponent', () => {
  let component: BetAddComponent;
  let fixture: ComponentFixture<BetAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
