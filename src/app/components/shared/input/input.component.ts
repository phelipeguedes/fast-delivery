import { AfterContentInit, Component, ContentChild, Input, OnInit } from '@angular/core';
import { FormControlName, NgModel } from '@angular/forms';
import { OrderComponent } from '../../../components/order/order.component';

@Component({
  selector: 'mt-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {
  
  input: any;

  @Input() msgError: string;
  @Input() label: string;

  @ContentChild(NgModel) model: NgModel
  @ContentChild(FormControlName) control: FormControlName
  

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.input = this.model || this.control

    if(this.input == undefined)
      throw new Error('É necessário usar ng model ou nesse componente')
  }

  displayMsgSuccess(): boolean {
      return this.input.valid && (this.input.touched || this.input.dirty);
  }

  displayMsgError(): boolean {
    return this.input.invalid && (this.input.touched || this.input.dirty);
  }

}
