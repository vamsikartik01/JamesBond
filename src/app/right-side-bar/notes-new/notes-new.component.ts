import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notes-new',
  templateUrl: './notes-new.component.html',
  styleUrls: ['./notes-new.component.css']
})
export class NotesNewComponent {
  @Input() note: string = "";
}
