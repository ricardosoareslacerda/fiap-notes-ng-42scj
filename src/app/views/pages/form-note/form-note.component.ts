import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Note } from 'src/app/domain/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-form-note',
  templateUrl: './form-note.component.html',
  styleUrls: ['./form-note.component.css'],
})
export class FormNoteComponent implements OnInit {
  title = 'FIAP NOTES';
  checkoutForm: FormGroup = this.createFormGroup();
  subscription: Subscription;
  noteIdEditable: number = 0;

  constructor(private formBuilder: FormBuilder, private noteService: NoteService) {

    this.subscription = this.noteService.editNoteProvider.subscribe(
      (note) => {
        this.checkoutForm = this.createFormGroup(note);
      });
  }

  ngOnInit() : void {}

  createFormGroup(data?: Note) : FormGroup {
    if (data == null) {
      this.noteIdEditable = 0;
      return this.formBuilder.group({
        text: ["", [Validators.required, Validators.minLength(5)]],
        noteId: this.noteIdEditable,
      });  
    }
    
    this.noteIdEditable = data.id; 
    return this.formBuilder.group({
      text: [data.text, [Validators.required, Validators.minLength(5)]],
      noteId: data.id,
    });
  }

  sendNote() {
    if (this.checkoutForm.valid) {
      const noteForm = this.checkoutForm.value;

      if (noteForm.noteId != null 
            && noteForm.noteId != 0) {

          this.noteService.editNote(noteForm.noteId, noteForm.text).subscribe(
          (data: Note) =>  {
            this.noteService.notifyEditNoteUpdated(data);
            this.checkoutForm = this.createFormGroup();
          }
        );

      }
      else {

        this.noteService.addNote(noteForm.text).subscribe(
          (data: Note) =>  {
            this.checkoutForm.reset();
            this.noteService.notifyNewNoteAdded(data);
          }
        );
      }
    }
  }

  cleanNote() {
    this.checkoutForm.reset();
    this.createFormGroup();
  }

  get text() {
    return this.checkoutForm.get('text');
  }

  get noteId() {
    return this.checkoutForm.get('noteId');
  }
}
