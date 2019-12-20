import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  AfterContentChecked,
  OnDestroy,
  AfterContentInit
} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit, OnChanges, DoCheck, AfterViewInit,
AfterContentInit, AfterViewChecked, AfterContentChecked, AfterViewChecked, OnDestroy {

  // tslint:disable-next-line: variable-name
  @Input('testdata') _testData: string;
  order = 1;

  constructor() {
    console.log('I am from constructor()!! and my order::::' + this.order);
    this.order++;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('I am from ngOnChanges()!! and my order::::' + this.order);
    this.order++;

    // tslint:disable-next-line: forin
    for (const propName in changes) {
      const change = changes[propName];
      const curVal = JSON.stringify(change.currentValue);
      const prevVal = JSON.stringify(change.previousValue);

      // console.log(curVal);
      // console.log(prevVal);
    }
  }

  ngOnInit() {
    console.log('I am from ngOnInit() and my order::::' + this.order);
    this.order++;
  }

  ngDoCheck() {
    console.log('I am from ngDoCheck() and my order::::' + this.order);
    this.order++;
  }

  ngAfterContentInit() {
    console.log('I am from ngAfterContentInit() and my order::::' + this.order);
    this.order++;
  }

  ngAfterContentChecked() {
    console.log('I am from ngAfterContentChecked() and my order::::' + this.order);
    this.order++;
  }

  ngAfterViewInit() {
    console.log('I am from ngAfterViewInit() and my order::::' + this.order);
    this.order++;
  }

  ngAfterViewChecked() {
    console.log('I am from ngAfterViewChecked() and my order::::' + this.order);
    this.order++;
  }

  ngOnDestroy() {
    console.log('I am from ngOnDestroy() and my order::::' + this.order);
    this.order++;
  }
}


