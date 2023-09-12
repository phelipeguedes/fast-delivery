import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'mt-register-box',
  templateUrl: '../register-box/register-box.component.html',
  styleUrls: ['../register-box/register-box.component.css']
})
export class RegisterBoxComponent implements OnInit {

  @Input() typeRegister: number; 
  @Input() items: string[];
  @Input() titleBox: string;
  @Input() url: string;

  img: string = '';
  img1: string = 'https://static.ifood-static.com.br/image/upload/f_auto/webapp/landingV2/restaurant.png';
  img2: string = 'https://img.freepik.com/vetores-gratis/a-sticker-with-delivery-man-on-motor-scooter_1308-63025.jpg?w=2000';

  constructor() { }

  ngOnInit() {
    if(this.typeRegister == 1) {
      this.img = this.img1;
    } else {
      this.img = this.img2;
    }
  }

}
