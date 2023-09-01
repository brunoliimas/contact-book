import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) {
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
    if (this.form.valid) {
      const formData = this.form.value; // Obter os valores do formulário
      this.contactService.save(formData);
      location.reload();
      console.log('Enviando dados para o backend:', formData);
    }
  }
}
