import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProviderService } from 'src/app/service/provider/provider.service';
@Component({
  selector: 'app-form-post-provider',
  templateUrl: './form-post-provider.component.html',
  styleUrls: ['./form-post-provider.component.css']
})
export class FormPostProviderComponent implements OnInit{
  constructor(private provider:ProviderService) { }
  reactiveForm:FormGroup={} as FormGroup;
  ngOnInit(): void {
    this.initializeForm()
  }
  initializeForm(){
    this.reactiveForm=new FormGroup({
      name: new FormControl("",[Validators.required, Validators.minLength(10)]),
      cnpj: new FormControl("",[Validators.required, Validators.minLength(14)]),
      email: new FormControl("",[Validators.required, Validators.email]),
      phone:new FormControl("",[Validators.required])
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
    this.provider.postData(this.reactiveForm.value).subscribe(res=>{
      this.toggleToast();
     }, ()=>{
       console.log("error");
     })
  }

}
