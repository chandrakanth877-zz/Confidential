import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute,Router } from "@angular/router";

import { IConfidentialFormModel, ConfidentialFormModel } from "../shared/ConfidentialFormModel";
import { ConfidentialService } from "../ConfidentialFormService/confidential.service";
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-confidential-form-information',
  templateUrl: './confidential-form-information.component.html',
  styleUrls: ['./confidential-form-information.component.css']
})
export class ConfidentialFormInformationComponent implements OnInit, AfterViewInit {
  public confidentialForm:FormGroup;
  public formModel:ConfidentialFormModel;

  constructor(private fb:FormBuilder, 
    private router:Router,
    private route:ActivatedRoute, 
    private confidentialFormService:ConfidentialService) {
      this.formModel = this.confidentialFormService.ConfiddentialFormModel();
     }

  ngOnInit() {
    
    this.confidentialForm = this.fb.group({
      firstName:["",[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      lastName:["",[Validators.required,Validators.minLength(3), Validators.maxLength(50)]],
      middleName:[""],
      dateOfBirth:["", [Validators.required]],
      gender:["", [Validators.required]],
      placeOfBirth:["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      provinceOfBirth:["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      countryOfBirth:["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      countryOfCitizenship:["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      socialSecurityNumber:["", [Validators.minLength(9), Validators.pattern('[0-9]{9}')]],
      mobile:["", [Validators.required,Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]],
      primaryEMail:["", [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]]
    });
    if(this.formModel != undefined){
      this.confidentialForm.patchValue({
        firstName:this.formModel.firstName,
        lastName:this.formModel.lastName,
        middleName:this.formModel.middleName,
        dateOfBirth:this.formModel.dateOfBirth,
        gender:this.formModel.gender,
        placeOfBirth:this.formModel.placeOfBirth,
        provinceOfBirth:this.formModel.provinceOfBirth,
        countryOfBirth:this.formModel.countryOfBirth,
        countryOfCitizenship:this.formModel.countryOfCitizenship,
        socialSecurityNumber:this.formModel.socialSecurityNumber,
        mobile:this.formModel.mobile,
        primaryEMail:this.formModel.primaryEMail
      }
       
      );
    }
     this.route.parent.data.subscribe(
       val =>{
         this.formModel = val['formModel'];
       }
     )
     
    this.confidentialForm.valueChanges.subscribe(val =>{
      if(this.confidentialForm.dirty && this.confidentialForm.valid){
        let formModel = Object.assign({}, this.formModel, this.confidentialForm.value);
        this.confidentialFormService.saveModel(formModel);
      }
    });
  }
  ngAfterViewInit(){
      
  }

  
  navigateToContact(){
    this.router.navigate(['/confidential','contact'])
  }

}
