import { Injectable } from '@angular/core';

export interface Student {
  id: number;
  name: string;
  course: string;
  fees: number;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[] = [
    { id: 1, name: 'A', course: 'Angular', fees: 5000, status: 'Active' },
    { id: 2, name: 'bB', course: 'React', fees: 4000, status: 'Active' },
    { id: 3, name: 'C', course: 'Java', fees: 3000, status: 'Inactive' }
  ];

  getStudents(): Student[] {
    return this.students;
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

}