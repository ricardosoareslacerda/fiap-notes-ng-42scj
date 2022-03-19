import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionNotesComponent } from './section-notes.component';

describe('SectionNotesComponent', () => {
  let component: SectionNotesComponent;
  let fixture: ComponentFixture<SectionNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
