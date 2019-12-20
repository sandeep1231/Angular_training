import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Training';
  imagePath: string = 'assets/images/favicon.ico';
  currentValue: boolean = false;
  myId:string = 'testId';
  userName:string = 'shashank';
  message:string = "";
  
  isDisabled:boolean = false;
changeMyTitle(event) {
  console.log(event);
  this.title = 'Learning Event Binding';
}
childevent(data){
  console.log(data);
  
    this.message = data;
}
greetuser(){
  return 'hello';
}
}
