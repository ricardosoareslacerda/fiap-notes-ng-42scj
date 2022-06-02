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

  // fontes de dados da mensagem de uma lugar pro outro
  // RXJS - Biblioteca padrao do angular 
  private newNoteSource = new Subject<Note>();
  newNoteProvider = this.newNoteSource.asObservable();
  
  private editNoteSource = new Subject<Note>();
  editNoteProvider = this.editNoteSource.asObservable();
  
  private editUpdatedNoteSource = new Subject<Note>();
  editUpdatedNoteProvider = this.editUpdatedNoteSource.asObservable();

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

  editNote(id: number, note: string) {
    return this.http.put<Note>(`${this.apiUrl}/notes/${id}`, {text: note});
  }

  // metodo para inscricao do componente no provider
  notifyNewNoteAdded(note: Note){
    this.newNoteSource.next(note);
  }

  notifyEditNoteEditted(note: Note){
    this.editNoteSource.next(note);
  }

  notifyEditNoteUpdated(note: Note){
    this.editUpdatedNoteSource.next(note);
  }
}

function* generateId(){
  let id = 1;
  while(true){
    yield id;
    id++;
  }
}
