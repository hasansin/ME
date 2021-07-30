import { DemoService } from './../demo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(private demoService: DemoService) {}

  Products: any;
  IsSelected: boolean = false;
  product: any;
  ngOnInit(): void {
    this.getList();
  }

  public getList = () => {
    this.demoService.getProdcutList().subscribe((data) => {
      this.Products = data;
      console.log(data);
    });
  };

  delete(id: number) {
    this.demoService.deleteProduct(id).subscribe((res) => {
      console.log(res);
    });
  }

  update(id: number) {
    this.demoService.getProdcut(id).subscribe((res) => {
      console.log(res);
      this.product = res;
      this.IsSelected = true;

      //   this.demoService.updateProduct(data).subscribe((response) => {
      //     console.log(res);
      //   });
      //   console.log(res);
    });
  }

  UpdateItem() {
    this.demoService.updateProduct(this.product).subscribe((res) => {
      console.log(res);
    });
  }
}
