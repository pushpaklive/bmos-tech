import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  buttonClicked:boolean;

  constructor() { }

  ngOnInit() {
  }

  goToAtl(){
    this.buttonClicked = true;
  }

}
