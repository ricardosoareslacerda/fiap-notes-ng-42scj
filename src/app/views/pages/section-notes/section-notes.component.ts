import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Note } from 'src/app/domain/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-section-notes',
  templateUrl: './section-notes.component.html',
  styleUrls: ['./section-notes.component.css'],
})
export class SectionNotesComponent implements OnInit {

  //notes: any;
  notes: Note[];  
  subscription: Subscription;
  
  constructor(
    private noteService: NoteService
  ) {
    this.notes = [];
    this.subscription = this.noteService.newNoteProvider.subscribe(
      (note) => {
        this.notes.push(note);
      }
    );
    this.subscription = this.noteService.editUpdatedNoteProvider.subscribe(
      (note) => {
        this.getNotes();
      }
    );
  }

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(){
    this.noteService.getNotes().subscribe({
      next: (data) => this.notes = data,
      error: (err) => console.error(err),
      complete: () => console.log("Deu tudo certo")
    });
  }

  delete(id: number){
    this.noteService.deleteNote(id).subscribe(
      () => this.getNotes()
    );
  }

  showEdit(data: Note){
    this.noteService.notifyEditNoteEditted(data);
  }

  showError(){
    console.log("Erro ao obter os dados")
  }
}
