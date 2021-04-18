import { Component } from '@angular/core';
import  studentData  from '../assets/student.json';

interface Student {
  id: Number;
  name: String;
  email: String;
  gender: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  students: Student[] = studentData;
  
}
