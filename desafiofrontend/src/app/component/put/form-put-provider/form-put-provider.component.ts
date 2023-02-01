import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProviderService } from 'src/app/service/provider/provider.service';

@Component({
  selector: 'app-form-put-provider',
  templateUrl: './form-put-provider.component.html',
  styleUrls: ['./form-put-provider.component.css']
})
export class FormPutProviderComponent implements OnInit{
  constructor(private provider:ProviderService,
              private router:ActivatedRoute) { }
  reactiveForm:FormGroup = new FormGroup({
    name: new FormControl(""),
    cnpj: new FormControl(""),
    email: new FormControl(""),
    phone:new FormControl("")
  });
  ngOnInit(): void {
    this.provider.getById(this.router.snapshot.params['id']).subscribe((result)=>{
      this.reactiveForm = new FormGroup({
        name: new FormControl(result.name),
        cnpj: new FormControl(result.cnpj),
        email: new FormControl(result.email),
        phone:new FormControl(result.phone)
      });
    })
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
    this.provider.updateData(this.reactiveForm.value, this.router.snapshot.params["id"])
    .subscribe(res=>{
     this.toggleToast();
    }, ()=>{
      console.log("error");
    })
  }

}
