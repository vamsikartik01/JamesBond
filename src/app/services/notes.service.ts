import { EventEmitter, Injectable } from '@angular/core'; 

export class NoteService {
    currNote = new EventEmitter<string>();
    private note: string = "Find food in the Fridge!"

    getNote() {
        return this.note.slice();
    }

    updateNote(note: string) {
        this.note = note;
        this.currNote.emit(this.note.slice());
    }
}