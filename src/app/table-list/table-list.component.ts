import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {
  @Input()
  apiUrl!: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: data => {
        this.tableData = data;
      },
      error: error => {
        console.error(error);
      }
    });
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
    this.http.delete(`${this.apiUrl}/${toDelete.id}`)
      .subscribe(() => {
        this.tableData.splice(rowIndex, 1);
      });
  }
}
