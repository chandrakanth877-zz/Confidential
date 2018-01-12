import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { ConfidentialService } from "../ConfidentialFormService/confidential.service";
import { ConfidentialFormModel } from "../shared/ConfidentialFormModel";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  public authorizationForm:FormGroup;
  public formModel:ConfidentialFormModel;
  constructor(private fb:FormBuilder, 
              private router:Router, 
              private route:ActivatedRoute,
              private confidentialFormService:ConfidentialService) { 
                this.formModel = this.confidentialFormService.ConfiddentialFormModel();
              }

  ngOnInit() {
    this.authorizationForm = this.fb.group({
      placeOfLastEntry:["",[Validators.required]],
      visaUsedforEntry:["",[Validators.required]],
      currentVisaStatus:["",[Validators.required]],
      placeVIsaIssued:["",[Validators.required]],
      passportNumber:["",[Validators.required]],
      issuingCountry:["",[Validators.required]],
      passportIssueDate:["",[Validators.required]],
      passportExpirationDate:["",[Validators.required]],
      nameOfUniversity:["",[Validators.required]],
      universityAddress1:["",[Validators.required]],
      universityAddress2:[""],
      universityCity:["",[Validators.required]],
      universityState:["",[Validators.required]],
      universityZipCode:["",[Validators.required]],
      OPTStartDate:["",[Validators.required]],
      OPTEndDate:["",[Validators.required]],
    });

    if(this.formModel !=undefined){
      this.authorizationForm.patchValue({
        placeOfLastEntry:this.formModel.placeOfLastEntry,
        visaUsedforEntry:this.formModel.visaUsedforEntry,
        currentVisaStatus:this.formModel.currentVisaStatus,
        placeVIsaIssued:this.formModel.placeVIsaIssued,
        passportNumber:this.formModel.passportNumber,
        issuingCountry:this.formModel.issuingCountry,
        passportIssueDate:this.formModel.passportIssueDate,
        passportExpirationDate:this.formModel.passportExpirationDate,
        nameOfUniversity:this.formModel.nameOfUniversity,
        universityAddress1:this.formModel.universityAddress1,
        universityAddress2:this.formModel.universityAddress2,
        universityCity:this.formModel.universityCity,
        universityState:this.formModel.universityState,
        universityZipCode:this.formModel.universityZipCode,
        OPTStartDate:this.formModel.OPTStartDate,
        OPTEndDate:this.formModel.OPTEndDate
      });
    };

    this.authorizationForm.valueChanges.subscribe(val =>{
      if(this.authorizationForm.dirty && this.authorizationForm.valid){
        let formModel = Object.assign({}, this.formModel, this.authorizationForm.value);
        this.confidentialFormService.saveModel(formModel);
      }
    })

  }
  
  navigateToContact(){
    this.router.navigate(['/confidential','contact'])
  }

  navigateToEdu(){
    this.router.navigate(['/confidential','education'])
  }

}
