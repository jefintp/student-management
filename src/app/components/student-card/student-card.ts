import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Student } from '../../services/student';
import { CapitalizePipe } from '../../pipes/capitalize-pipe';
import { Highlight } from '../../directives/highlight';
@Component({
  selector: 'app-student-card',
  imports: [CapitalizePipe, Highlight],
  templateUrl: './student-card.html',
  styleUrl: './student-card.css'
})
export class StudentCard implements OnChanges {

  @Input() student!: Student;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Student data changed', changes);
  }

}