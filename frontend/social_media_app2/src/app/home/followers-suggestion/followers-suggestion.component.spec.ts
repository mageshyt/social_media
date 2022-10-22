import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowersSuggestionComponent } from './followers-suggestion.component';

describe('FollowersSuggestionComponent', () => {
  let component: FollowersSuggestionComponent;
  let fixture: ComponentFixture<FollowersSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowersSuggestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowersSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
