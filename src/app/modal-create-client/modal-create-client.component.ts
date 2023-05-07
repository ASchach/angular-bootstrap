import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal-create-client',
  templateUrl: './modal-create-client.component.html',
  styleUrls: ['./modal-create-client.component.scss']
})
export class ModalCreateClientComponent {

  formData = {
    cpr: '',
    firstName: '',
    lastName: '',
    birthYear: '',
    address: ''
  };

  constructor(private http: HttpClient) { }
  ngOnInit(): void {}

  onSubmit() {
  
    this.http.post('http://localhost:8080/api/v1/clients', this.formData).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.error(error);
      }
    );
  }

}
