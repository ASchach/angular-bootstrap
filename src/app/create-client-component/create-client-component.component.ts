import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-client-component',
  templateUrl: './create-client-component.component.html',
  styleUrls: ['./create-client-component.component.scss']
})
export class CreateClientComponentComponent {

  formData = {
    cpr: '',
    firstName: '',
    lastName: '',
    birthYear: '',
    address: ''
  };

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.http.post('localhost:8080/api/v1/clients', this.formData).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.error(error);
      }
    );
  }

}
