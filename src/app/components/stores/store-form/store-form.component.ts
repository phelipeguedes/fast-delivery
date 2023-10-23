import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from 'app/models/store.model';
import { StoreService } from 'app/services/store.service';
import { MessageService } from 'app/services/message.service';
import { Category } from 'app/models/category.model';
import { Subcategory } from 'app/models/subcategory.model';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

@Component({
  selector: 'mt-store-form',
  templateUrl: '../store-form/store-form.component.html',
  styleUrls: ['../store-form/store-form.component.css']
})
export class StoreFormComponent implements OnInit {

  form: FormGroup
  categories: Category[] = [];
  subcategories: Subcategory[] = [];

  constructor(private formBuilder: FormBuilder, private storeService: StoreService,
               private messageService: MessageService, private router: Router) {}

  ngOnInit() {
    this.initForm();
    this.getAllCategories();
    this.getAllSubcategories();
  }

  initForm() {

    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      category: [null, [Validators.required]],
      subcategory: [null, [Validators.required]],
      deliveryEstimate: [null, [Validators.required]],
      about: [null, [Validators.required, Validators.minLength(10)]],
      openingHours:[null, [Validators.required]],
      email: [null, [Validators.required]],
      phone: [null, [Validators.required, Validators.pattern('[- +()0-9]+')]],
      image: [null, [Validators.required]]
    });
  }

  // propriedades p/ validação do form
  get name() { return this.form.get('name'); }

  get category() { return this.form.get('category') };

  get subcategory() { return this.form.get('subcategory') };

  get deliveryEstimate() { return this.form.get('deliveryEstimate') };

  get about() { return this.form.get('about') };

  get email() { return this.form.get('email') };

  get phone() { return this.form.get('phone') };

  get image() { return this.form.get('image') };

  get openingHours() { return this.form.get('openingHours') };

  onImageSelected(event: any) {
    const file = event.target.files[0];
    this.form.patchValue({image: file});
  }

  async onSubmit() {

    const formData = new FormData();

    formData.append('name', this.form.value.name);
    formData.append('category', this.form.value.category);
    formData.append('subcategory', this.form.value.subcategory);
    formData.append('about', this.form.value.about);
    formData.append('deliveryEstimate', this.form.value.deliveryEstimate);
    formData.append('email', this.form.value.email);
    formData.append('phone', this.form.value.phone);
    formData.append('image_path', this.form.value.image);
    formData.append('openingHours', this.form.value.openingHours);

    if(!this.form.valid) {
      return this.messageService.showMessage('Todos os campos do formulário são obrigatórios');
    }

    await this.storeService.saveStore(formData).subscribe(() => {
      this.messageService.showMessage('Registro salvo com sucesso!!!');

      setTimeout(() => {
        this.router.navigate(['/stores']);
      }, 2500);
    }, error => {
      console.log('Erro: ', error);
      return this.messageService.showMessage('Erro ao salvar o registro: ' + error);
    });
  }

  getAllCategories() {
    return this.storeService.getCategories().subscribe((categories) => {
      console.log(categories);

      this.categories = categories;
    });
  }

  getAllSubcategories() {
    return this.storeService.getSubcategories().subscribe((subcategories) => {
      console.log(subcategories);

      this.subcategories = subcategories;
    })
  }
}
