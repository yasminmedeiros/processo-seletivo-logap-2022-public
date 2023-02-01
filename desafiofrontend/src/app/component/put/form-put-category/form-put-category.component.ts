import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/service/category/category.service';

@Component({
  selector: 'app-form-put-category',
  templateUrl: './form-put-category.component.html',
  styleUrls: ['./form-put-category.component.css']
})
export class FormPutCategoryComponent implements OnInit {
  constructor(private category:CategoryService,
              private router:ActivatedRoute) { }
  reactiveForm:FormGroup = new FormGroup({
    name: new FormControl("")
  });
  ngOnInit(): void {
    this.category.getById(this.router.snapshot.params['id']).subscribe((result)=>{
      this.reactiveForm = new FormGroup({
        name: new FormControl(result.name)
      })
    })
  }
  initializeForm(){
    this.reactiveForm=new FormGroup({
      name: new FormControl("",[Validators.required, Validators.minLength(5)])
    })
  }
  onsubmit(){
    console.log(this.reactiveForm.value);
    this.updateProvider();
  }
  handleError(controlName:string, errorName:string){
    return this.reactiveForm.controls[controlName].hasError(errorName);
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
  updateProvider(){
    this.category.updateData(this.reactiveForm.value, this.router.snapshot.params["id"])
    .subscribe(res=>{
     this.toggleToast();
    }, ()=>{
      console.log("error");
    })
  }
}
