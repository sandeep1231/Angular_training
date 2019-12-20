import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<h2>Welcome {{parentdata}} in child component</h2>
             <button (click)="childMethod()">Send Event</button>`,
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

@Input() parentdata:string;
@Output() public notify:EventEmitter<string> = new EventEmitter<string>();

childMethod(){
this.notify.emit('Welcome to Parent Component');
}

  constructor() { }

  ngOnInit() {
  }

}
