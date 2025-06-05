import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-small-dashboard',
  imports: [CommonModule,FormsModule],
  templateUrl: './small-dashboard.component.html',
  styleUrl: './small-dashboard.component.css'
})
export class SmallDashboardComponent {
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
