import {
  Component,
  OnInit,
  DoCheck,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

import { StudentService } from '../../services/student';
import { CapitalizePipe } from '../../pipes/capitalize-pipe';
import { Highlight } from '../../directives/highlight';
import { StudentCard } from '../student-card/student-card';

@Component({
  selector: 'app-student-list',
  imports: [CapitalizePipe, Highlight, StudentCard],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList implements OnInit, DoCheck, AfterViewInit, OnDestroy {

  students: any[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
    console.log('Students loaded');
  }

  ngDoCheck(): void {
    console.log('Change detection running');
  }

  ngAfterViewInit(): void {
    console.log('View initialized');
  }

  ngOnDestroy(): void {
    console.log('StudentList component destroyed');
  }
  refreshStudents(): void {
  this.students = [...this.studentService.getStudents()];
}

}