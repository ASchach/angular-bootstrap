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
      id: '',
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
    this.http.delete(`${this.apiUrl}/${toDelete.id}`)
      .subscribe(() => {
        this.tableData.splice(rowIndex, 1);
      });
  }

  editData: any = {};

  editRow(i: any){
    console.log(this.editData)
    console.log(this.tableData[i])
    this.editData = this.tableData[i]
    
    console.log(this.editData);
    console.log(this.tableData[i])
    console.log(this.editData === this.tableData[i])
  }
  

  saveEditedRow(rowIndex: number): void {
    // Update the tableData with the edited row data
    /* const rowIndex = this.tableData.indexOf(this.editData);
    this.tableData[rowIndex] = { ...this.editData };
    var toEdit = this.tableData[rowIndex];
    console.log(toEdit.id)
    console.log(toEdit) */
    console.log(this.editData)
    
    this.http.put(`${this.apiUrl}/${this.editData.id}`, this.editData).subscribe({
      next: response => {
        console.log(response);
        this.editData = {};
         // close the modal box if the form data is successfully submitted
      
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
