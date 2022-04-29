import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from 'src/app/domain/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-form-note',
  templateUrl: './form-note.component.html',
  styleUrls: ['./form-note.component.css'],
})
export class FormNoteComponent implements OnInit {
  title = 'FIAP NOTES';
  checkoutForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private noteService: NoteService
  ) {
    this.checkoutForm = this.formBuilder.group({
      text: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {}

  sendNote() {
    if (this.checkoutForm.valid) {
      const note = this.checkoutForm.value;

      this.noteService.addNote(note.text).subscribe(
        (data: Note) => {
          this.checkoutForm.reset();
          this.noteService.notifyNewNoteAdded(data);
        }
      );
    }
  }

  get text() {
    return this.checkoutForm.get('text');
  }
}
