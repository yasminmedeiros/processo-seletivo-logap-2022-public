import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/service/category/category.service';

@Component({
  selector: 'app-form-post-category',
  templateUrl: './form-post-category.component.html',
  styleUrls: ['./form-post-category.component.css']
})
export class FormPostCategoryComponent implements OnInit {
  constructor(private category:CategoryService) { }
  reactiveForm:FormGroup={} as FormGroup;
  ngOnInit(): void {
    this.initializeForm()
  }
  initializeForm(){
    this.reactiveForm=new FormGroup({
      name: new FormControl("",[Validators.required, Validators.minLength(5)])
    })
  }
  onsubmit(){
    console.log(this.reactiveForm.value);
    this.saveProvider();
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
  saveProvider(){
    this.category.postData(this.reactiveForm.value).subscribe(res=>{
     this.toggleToast();
    }, ()=>{
      console.log("error");
    })
  }
  

}
