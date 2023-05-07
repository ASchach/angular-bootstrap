import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

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
   var newFormData = {
      cpr: parseInt(this.formData.cpr),
      firstName: this.formData.firstName,
      lastName: this.formData.lastName,
      birthYear: parseInt(this.formData.birthYear),
      address: this.formData.address
    }
    console.log(newFormData)
    this.http.post('http://client:8080/api/v1/clients', newFormData).subscribe({
    next: response => {
      console.log(response);
    },
    error: error => {
      console.error(error);
    }
  });
}

}
