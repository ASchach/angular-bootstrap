import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/api/v1/clients').subscribe({
    next: data => {
      this.tableData = data;
    },
    error: error => {
      console.error(error);
    }
  });
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

  tableData = [
    {
      id: '',
      cpr: '',
      firstName: '',
      lastName: '',
      address: '',
      birthYear: ''
    }
  ];
  
  deleteRow(rowIndex: number): void {
    const toDelete = this.tableData[rowIndex];
    this.http.delete(`http://localhost:8080/api/v1/clients/${toDelete.id}`)
      .subscribe(() => {
        this.tableData.splice(rowIndex, 1);
      });
  }
}
