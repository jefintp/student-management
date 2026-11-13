import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentList } from './components/student-list/student-list';
import { StudentForm } from './components/student-form/student-form';
import { StudentService, Student } from './services/student';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentList, StudentForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('student-management');

  constructor(private studentService: StudentService) {}

addStudent(student: Student): void {
  this.studentService.addStudent(student);
}
}
