import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isHovered: boolean = false

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseOut() {
   this.isHovered = false;
  }

  editRow(rowData: any) {
    // Do something with the row data, such as display it in a form
    console.log(rowData);
  }

  //Static for now, needs to be collected from database eventually
  tableData = [
    {
      id: 6,
      firstName: 'Mason',
      lastName: 'Porter',
      location: 'London',
      birthYear: 1967
    },
    {
      id: 2,
      firstName: 'Lars',
      lastName: 'Larsen',
      location: 'Gloucester',
      birthYear: 1932
    },
    {
      id: 6,
      firstName: 'Evan',
      lastName: 'Cornelius',
      location: 'Madrid',
      birthYear: 1954
    },
    // Add more objects for other rows in the table
    ];
  
    deleteRow(rowIndex: number): void {
      this.tableData.splice(rowIndex, 1);
    }

  

}
