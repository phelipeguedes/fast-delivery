import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { RadioOptions } from './radio.model.options';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
    
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOptions[];
  
  value: any;
  change: any;

  constructor() { }

  ngOnInit() {
  }

  check(value: any) {
    this.value = value;
    this.change(this.value);
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(newChange: any): void {
    this.change = newChange;
  }

  registerOnTouched(fn: any): void {
    //throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    //throw new Error('Method not implemented.');
  }
}
