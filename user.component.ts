import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [CommonModule,FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  

  students: { name: string; grade: string }[] = [];
  studentName: string = '';
  studentGrade: string = '';

  addStudent() {
    if (this.studentName && this.studentGrade) {
      this.students.push({ name: this.studentName, grade: this.studentGrade });
      this.studentName = '';
      this.studentGrade = '';
    }
  }

  getGradeLabel(grade: string) {
    switch (grade) {
      case 'A':
        return ' Excellent';
      case 'B':
        return ' Good';
      case 'C':
        return ' Needs Improvement';
      default:
        return 'No Remark';
    }
  }

  getColorClass(grade: string) {
    switch (grade) {
      case 'A':
        return 'green';
      case 'B':
        return 'orange';
      case 'C':
        return 'red';
      default:
        return '';
    }
  }
}


