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

  errorMessage = ''

  toDelete = false;

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

  tableData = [
    {
      cpr: '',
      firstName: '',
      lastName: '',
      address: '',
      birthYear: ''
    }
  ];

  showDelete(){
    this.toDelete = true;
  }
  hideDelete(){
    this.toDelete = false;
  }
  

  deleteRow(rowIndex: number): void {
    const toDelete = this.tableData[rowIndex];
    this.http.delete(`${this.apiUrl}/${toDelete.cpr}`)
      .subscribe(() => {
        this.tableData.splice(rowIndex, 1);
      });
  }

  editData: any = {};

  editRow(i: any){
      this.editData = this.tableData[i]
  }
  

  saveEditedRow(rowIndex: number): void {
    // Update the tableData with the edited row data    
    this.http.put(`${this.apiUrl}/${this.editData.cpr}`, this.editData).subscribe({
      next: response => {
        if(response !== null){
          console.log(response)
        }
        this.editData = {}      
      },
      error: error => {
        console.error(error);
        this.errorMessage = error.message;
        
      }
    });
  }

  cancelEditRow() {
    // Clear the editableRowData
    this.editData = {};
  }
}
