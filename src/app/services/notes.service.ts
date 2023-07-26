import { EventEmitter, Injectable } from '@angular/core'; 

export class NoteService {
    currNote = new EventEmitter<string>();
    private note: string = "Max, Don't steal my fan again! --Lewis"

    getNote() {
        return this.note.slice();
    }

    updateNote(note: string) {
        this.note = note;
        this.currNote.emit(this.note.slice());
    }
}