import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Note } from '../domain/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private listNotes: Note[] = [];
  private apiUrl: string;

  genId: any;

  private newNoteSource = new Subject<Note>();
  newNoteProvider = this.newNoteSource.asObservable();

  constructor(private http: HttpClient) { 
    this.genId = generateId();
    this.apiUrl = "https://fiap-notes-api.herokuapp.com";
  }

  getNotes(){
    return this.http.get<Note[]>(`${this.apiUrl}/notes`);
  }

  deleteNote(noteId: number){
    return this.http.delete(`${this.apiUrl}/notes/${noteId}`);
  }

  // addNote(note: Note){
  //   note.date = new Date();
  //   note.id = this.genId.next().value;
  //   this.listNotes.push(note);
  // }

  addNote(textNote: string){
    return this.http.post<Note>(`${this.apiUrl}/notes`, {text: textNote});
  }

  notifyNewNoteAdded(note: Note){
    this.newNoteSource.next(note);
  }
}

function* generateId(){
  let id = 1;
  while(true){
    yield id;
    id++;
  }
}
