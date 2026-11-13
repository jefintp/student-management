import { Component, Output, EventEmitter } from '@angular/core';

import { Student } from '../../services/student';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  imports: [FormsModule],
  templateUrl: './student-form.html',
  styleUrl: './student-form.css'
})
export class StudentForm {

  @Output() studentAdded = new EventEmitter<Student>();
  addStudent(name: string, course: string, fees: number, status: string): void {

  const student: Student = {
    id: Date.now(),
    name: name,
    course: course,
    fees: fees,
    status: status
  };

  this.studentAdded.emit(student);
}

}