import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/domain/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() noteProp: Note | undefined;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
}
