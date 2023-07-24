import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NoteService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-notes-new',
  templateUrl: './notes-new.component.html',
  styleUrls: ['./notes-new.component.css']
})
export class NotesNewComponent {
  @ViewChild('noteText') noteTextObj: ElementRef;
  note: string = "";

  constructor(private noteService: NoteService){}
  
  ngOnInit(){
    this.note = this.noteService.getNote()
  }

  updateNote(){
    this.note = this.noteTextObj.nativeElement.value;
    this.noteService.updateNote(this.note);
  }

  clearNote(){
    this.note = "";
    this.noteService.updateNote(this.note);
  }
}
