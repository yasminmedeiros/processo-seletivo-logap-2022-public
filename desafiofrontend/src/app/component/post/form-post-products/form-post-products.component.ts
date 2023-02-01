/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryInterface } from 'src/app/interfaces/category';
import { ProviderInterface } from 'src/app/interfaces/provider';
import { CategoryService } from 'src/app/service/category/category.service';
import { ProductService } from 'src/app/service/product/product.service';
import { ProviderService } from 'src/app/service/provider/provider.service';

@Component({
  selector: 'app-form-post-products',
  templateUrl: './form-post-products.component.html',
  styleUrls: ['./form-post-products.component.css']
})
export class FormPostProductsComponent implements OnInit{
  constructor(private product:ProductService, 
              private category:CategoryService,
              private provider:ProviderService ) { }

  statesCategory:CategoryInterface[] = [];
  statesProvider:ProviderInterface[] = [];
  form:FormGroup={} as FormGroup;

  ngOnInit(): void {
    this.category.get()
      .subscribe(res=>{
        this.statesCategory = res;
      });
    this.provider.get()
      .subscribe(res=>{
        this.statesProvider = res;
      });
    this.initializeForm();
  }
  position = 'top-end';
  visible = false;
  percentage = 0;

  toggleToast() {
    this.visible = !this.visible;
  }

  onVisibleChange($event: boolean) {
    this.visible = $event;
    this.percentage = !this.visible ? 0 : this.percentage;
  }

  onTimerChange($event: number) {
    this.percentage = $event * 25;
  }

  initializeForm(){
    this.form=new FormGroup({
      name: new FormControl("",[Validators.required, Validators.minLength(5)]),
      category: new FormControl(this.statesCategory[0]),
      provider: new FormControl(this.statesProvider[0]),
      value_buy: new FormControl("",[Validators.required]),
      value_send: new FormControl("",[Validators.required]),
      quantity: new FormControl("",[Validators.required]),
      quantity_minimum: new FormControl("",[Validators.required]),
    });
  }
  saveData(){
    this.product.postData({
      name: this.form.value.name,
      value_send: this.form.value.value_send,
      value_buy: this.form.value.value_buy,
      quantity: this.form.value.quantity,
      quantity_minimum: this.form.value.quantity_minimum
    },`${this.form.value.category.id}`, `${this.form.value.provider.id}`)
    .subscribe(()=>{
      this.toggleToast();
     }, ()=>{
       console.log("error");
     })
  }

}
