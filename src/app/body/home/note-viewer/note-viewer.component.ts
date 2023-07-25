import { Component, OnInit } from '@angular/core';

import {NoteService} from '../../../services/notes.service'

@Component({
  selector: 'app-note-viewer',
  templateUrl: './note-viewer.component.html',
  styleUrls: ['./note-viewer.component.css']
})
export class NoteViewerComponent {
  note: string = "";

  constructor(private noteService: NoteService ){
  }

  ngOnInit() {
    this.note = this.noteService.getNote();
    this.noteService.currNote
    .subscribe(
      (notetext: string) => {
        this.note = notetext;
        console.log("sub",this.note);
      }
    );
  }
}
