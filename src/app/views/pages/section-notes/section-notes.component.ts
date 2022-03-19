import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-notes',
  templateUrl: './section-notes.component.html',
  styleUrls: ['./section-notes.component.css'],
})
export class SectionNotesComponent implements OnInit {
  listNotes = [
    {
      id: 1,
      text: 'minha nota',
      date: new Date(),
      urgent: true,
    },
    {
      id: 2,
      text: 'minha segunda nota',
      date: new Date(),
      urgent: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  deleteNoteOfList(id: number) {
    this.listNotes = this.listNotes.filter((note) => note.id !== id);
  }
}
