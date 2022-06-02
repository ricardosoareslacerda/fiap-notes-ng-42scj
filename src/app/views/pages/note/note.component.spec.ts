import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteComponent } from './note.component';

fdescribe('NoteComponent', () => {
  let component: NoteComponent;
  let fixture: ComponentFixture<NoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  afterEach(() =>
    console.log("tudo terminou!")
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
