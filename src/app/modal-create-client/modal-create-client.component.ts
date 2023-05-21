import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modal-create-client',
  templateUrl: './modal-create-client.component.html',
  styleUrls: ['./modal-create-client.component.scss']
})
export class ModalCreateClientComponent {
  @Input()
  apiUrl!: string;

  errorMessage = ''

  formData: FormGroup;

  

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.formData = fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      address: ['', [Validators.required]],
      birthYear: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
      cpr: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
   }
  ngOnInit(): void {}

  onSubmit() {
   var newFormData = {
      cpr: parseInt(this.formData.get('cpr')?.value),
      firstName: this.formData.get('firstName')?.value,
      lastName: this.formData.get('lastName')?.value,
      birthYear: parseInt(this.formData.get('birthYear')?.value),
      address: this.formData.get('address')?.value
    }
    this.http.post(this.apiUrl, newFormData).subscribe({
    next: response => {
      if(response!== null){console.log(response);}
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
