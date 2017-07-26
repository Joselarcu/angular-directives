import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  alert: string = "alert-danger";
 

  properties: Object = {
    danger: true
  }

  constructor() { }

  ngOnInit() {
  }

}
