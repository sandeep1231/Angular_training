import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.scss']
})
export class StructuralComponent implements OnInit {

// public colors = ["red", "blue","yellow","green"];
color = 'orange';
people: any[] = [
  {
    "name": "Douglas  Pace",
    "age": 35
  },
  {
    "name": "Mcleod  Mueller",
    "age": 32
  },
  {
    "name": "Day  Meyers",
    "age": 21
  },
  {
    "name": "Aguirre  Ellis",
    "age": 34
  },
  {
    "name": "Cook  Tyson",
    "age": 32
  }
];
  constructor() { }

  ngOnInit() {
  }

}
