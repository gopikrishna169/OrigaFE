import { Component, Input, OnInit } from '@angular/core';
import { UserData } from 'src/app/Interfaces/UserData.interface';
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() userData: UserData[];
  displayedColumns: string[] = ['name', 'username', 'city', 'pincode', 'company name'];
  constructor() { }

  ngOnInit() {
  }

}
