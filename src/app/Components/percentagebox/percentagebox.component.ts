import { Component, Input, OnInit } from '@angular/core';
import { UserData } from 'src/app/Interfaces/UserData.interface';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'percentagebox',
  templateUrl: './percentagebox.component.html',
  styleUrls: ['./percentagebox.component.css']
})
export class PercentageboxComponent implements OnInit {
  @Input() userData: UserData[];
  constructor() { }

  ngOnInit() {
  }

}
