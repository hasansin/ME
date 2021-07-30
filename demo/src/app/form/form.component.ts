import { DemoService } from './../demo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(private demoservice: DemoService) {}

  product = {
    name: 'product01',
    quantity: 1,
    price: 1,
  };
  ngOnInit(): void {}

  submit(): void {
    const data = {
      name: this.product.name,
      quantity: this.product.quantity,
      price: this.product.price,
    };

    this.demoservice.createProduct(data).subscribe((res) => {
      console.log(res);
    });
  }
}
