import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal-create-client',
  templateUrl: './modal-create-client.component.html',
  styleUrls: ['./modal-create-client.component.scss']
})
export class ModalCreateClientComponent {
  @Input()
  apiUrl!: string;

  errorMessage = ''

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
    this.http.post(this.apiUrl, newFormData).subscribe({
    next: response => {
      console.log(response);
       // close the modal box if the form data is successfully submitted       
        document.getElementById("closeButton")?.click();
    
    },
    error: error => {
      console.error(error);
      this.errorMessage = error.message;
      
    }
  });
}

}
