import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css',
  providers: [DataService],
})
export class AppointmentComponent implements OnInit {
  patientForm: FormGroup;

  constructor(
    private router: Router,
    private ds: DataService,
    private formBuilder: FormBuilder
  ) {
    this.patientForm = this.formBuilder.group({
      first_name: [null, Validators.required],
      last_name: [null, Validators.required],
      middle_name: [null, Validators.required],
      extension_name: [null, Validators.required],
      address: [null, Validators.required],
      reason: [null, Validators.required],
      phone: [null, Validators.required],
      gender: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const formData = this.patientForm.value; // Extract the form values
    console.log(formData);

    this.ds.postRequest('patients/add', formData).subscribe(
      (res: any) => {
        console.log(res);
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }
}
