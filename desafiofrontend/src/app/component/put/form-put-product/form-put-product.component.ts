import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryInterface } from 'src/app/interfaces/category';
import { ProductInterface } from 'src/app/interfaces/product';
import { ProviderInterface } from 'src/app/interfaces/provider';
import { CategoryService } from 'src/app/service/category/category.service';
import { ProductService } from 'src/app/service/product/product.service';
import { ProviderService } from 'src/app/service/provider/provider.service';

@Component({
  selector: 'app-form-put-product',
  templateUrl: './form-put-product.component.html',
  styleUrls: ['./form-put-product.component.css']
})
export class FormPutProductComponent implements OnInit {
  constructor(private product:ProductService,
              private provider:ProviderService,
              private category:CategoryService,
              private router:ActivatedRoute) { }

  providerDefault = {} as ProviderInterface;
  categoryDefault = {} as CategoryInterface;

  statesCategory:CategoryInterface[] = [];
  statesProvider:ProviderInterface[] = []; 

  reactiveForm:FormGroup = new FormGroup({
    name: new FormControl(""),
    category: new FormControl({} as CategoryInterface),
    provider: new FormControl({} as ProviderInterface),
    value_buy: new FormControl(""),
    value_send: new FormControl(""),
    quantity: new FormControl(""),
    quantity_minimum: new FormControl("")
  });
  ngOnInit(): void {
    
    this.category.get().subscribe((result)=>{
      this.statesCategory = result;
      result.map((val:CategoryInterface)=>{
        val.products.map((value:ProductInterface)=>{
          if(`${value.id}`===this.router.snapshot.params["id"]){
            this.categoryDefault = val;

          }
        })
      })
    });
    this.provider.get().subscribe((result)=>{
      this.statesProvider = result;
      result.map((val:ProviderInterface)=>{
        val.products.map((value:ProductInterface)=>{
          if(`${value.id}`===this.router.snapshot.params["id"]){
            this.providerDefault = val;
          }
        })
      })
    });
    this.product.getById(this.router.snapshot.params['id']).subscribe((result)=>{
      this.reactiveForm = new FormGroup({
        name: new FormControl(result.name),
        category: new FormControl(this.categoryDefault),
        provider: new FormControl(this.providerDefault),
        value_buy: new FormControl(result.value_buy),
        value_send: new FormControl(result.value_send),
        quantity: new FormControl(result.quantity),
        quantity_minimum: new FormControl(result.quantity_minimum)
      });
    });
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
  updateData(){
    this.product.updateData(
    {
      name: this.reactiveForm.value.name,
      value_send: this.reactiveForm.value.value_send,
      value_buy: this.reactiveForm.value.value_buy,
      quantity: this.reactiveForm.value.quantity,
      quantity_minimum: this.reactiveForm.value.quantity_minimum
    },
     this.router.snapshot.params["id"],
    `${this.reactiveForm.value.category.id}`,
     `${this.reactiveForm.value.provider.id}`)
    .subscribe(()=>{
      this.toggleToast();
     }, ()=>{
       console.log("error");
     })
  }
  

}
