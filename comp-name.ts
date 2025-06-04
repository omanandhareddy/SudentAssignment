import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comp-name',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './comp-name.html',
  styleUrls: ['./comp-name.css']
})
export class CompName {
  name=""
  subject=""
  score1: number = 0;
  score2: number = 0;
  total: number = 0;
  showMessage: boolean = false;
  submitBtn(){
    this.total = Number(this.score1) + Number(this.score2);
    this.showMessage = true;
  }
}
