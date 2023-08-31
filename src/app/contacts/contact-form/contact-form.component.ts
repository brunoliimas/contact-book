import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      birthdate: [null],
      email: ['', [Validators.required, Validators.email]],
      profession: [''],
      phone: [''],
      cellphone: [''],
      whatsapp: [false],
      sendEmail: [false],
      sendSms: [false],
    });
  }

  ngOnInit(): void {}
  onAdd() {
    console.log('Adicionar');
  }
}
