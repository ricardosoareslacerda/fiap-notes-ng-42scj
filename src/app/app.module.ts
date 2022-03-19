import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormNoteComponent } from './views/pages/form-note/form-note.component';
import { SectionNotesComponent } from './views/pages/section-notes/section-notes.component';
import { NoteComponent } from './views/pages/note/note.component';
import { LoginComponent } from './views/pages/login/login.component';
import { HomeComponent } from './views/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FormNoteComponent,
    SectionNotesComponent,
    NoteComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
