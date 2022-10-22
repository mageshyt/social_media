import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggesitionUserComponent } from './suggesition-user.component';

describe('SuggesitionUserComponent', () => {
  let component: SuggesitionUserComponent;
  let fixture: ComponentFixture<SuggesitionUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggesitionUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggesitionUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
