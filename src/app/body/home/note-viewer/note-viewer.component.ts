import { Component } from '@angular/core';

@Component({
  selector: 'app-note-viewer',
  templateUrl: './note-viewer.component.html',
  styleUrls: ['./note-viewer.component.css']
})
export class NoteViewerComponent {
  note: string = "This is a note created by mom.";
}
