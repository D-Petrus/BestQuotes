import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotesButtonComponent } from './votes-button.component';

describe('VotesButtonComponent', () => {
  let component: VotesButtonComponent;
  let fixture: ComponentFixture<VotesButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotesButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
