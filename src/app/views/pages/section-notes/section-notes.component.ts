import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/domain/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-section-notes',
  templateUrl: './section-notes.component.html',
  styleUrls: ['./section-notes.component.css'],
})
export class SectionNotesComponent implements OnInit {

  notes: any;
  
  constructor(
    private notesService: NoteService
  ) {}

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(){
    this.notesService.getNotes().subscribe({
      next: (data) => this.notes = data,
      error: (err) => console.error(err),
      complete: () => console.log("Deu tudo certo")
    });
  }

  delete(id: number){
    this.notesService.deleteNote(id).subscribe(
      () => this.getNotes()
    );
  }

  showError(){
    console.log("Erro ao obter os dados")
  }
}
