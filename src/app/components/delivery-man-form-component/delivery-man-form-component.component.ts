import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DeliveryMan } from 'app/models/deliveryman.model';
import { DeliveryManService } from 'app/services/deliverymen.service';
import { MessageService } from 'app/services/message.service';

@Component({
  selector: 'mt-delivery-man-form-component',
  templateUrl: './delivery-man-form-component.component.html',
  styleUrls: ['./delivery-man-form-component.component.css']
})
export class DeliveryManFormComponentComponent implements OnInit {

  form: FormGroup;

  constructor(private deliverymanService: DeliveryManService, private formBuilder: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(8)]],
      gender: ['', [Validators.required]],
      date_of_birth: ['', [Validators.required]],
      cpf: ['', [Validators.required, Validators.minLength(11)]],
      identity: ['',[Validators.required, Validators.minLength(11)]],
      phone: ['', [Validators.required, Validators.minLength(11)]],
      email: ['', [Validators.required]],
      cep: ['', [Validators.required]],
      address: ['', [Validators.required]],
      neighborhood: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      image_path: ['', [Validators.required]]
    });
  }

  onImageSelected(event: any) {

    if(event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.patchValue({image_path: file})
    }

    console.log(this.form.value);
  }

  onSubmit() {

    const formData = new FormData();

    formData.append('name', this.form.value.name);
    formData.append('gender', this.form.value.gender);
    formData.append('date_of_birth', this.form.value.date_of_birth);
    formData.append('cpf', this.form.value.cpf);
    formData.append('identity', this.form.value.identity);
    formData.append('phone', this.form.value.phone);
    formData.append('email', this.form.value.email);
    formData.append('cep', this.form.value.cep);
    formData.append('address', this.form.value.address);
    formData.append('neighborhood', this.form.value.neighborhood);
    formData.append('city', this.form.value.city);
    formData.append('state', this.form.value.state);
    formData.append('image_path', this.form.value.image_path);

    if(!this.form.valid) {
      return this.messageService.showMessage('Todos os campos do formulário são obrigatórios');
    }

    this.deliverymanService.saveDeliveryman(formData).subscribe(() => {
      return this.messageService.showMessage('Registro salvo com sucesso!!!');
    }, error => {
      console.log('Erro: ', error);
      return this.messageService.showMessage('Erro ao salvar o registro: ' + error);
    });
  }

}
