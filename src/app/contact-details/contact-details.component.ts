import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from "@angular/router";
import { ConfidentialService } from '../ConfidentialFormService/confidential.service';
import { ConfidentialFormModel } from "../shared/ConfidentialFormModel";

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  public contactForm:FormGroup;
  public formModel:ConfidentialFormModel;
  constructor(private fb:FormBuilder, private route:ActivatedRoute, private router:Router,private confidentialFormService:ConfidentialService) {
    this.formModel = this.confidentialFormService.ConfiddentialFormModel();
  }
   

  ngOnInit() {
    this.contactForm = this.fb.group({
      foreignHomeAddress1:["",[Validators.required]],
      foreignHomeAddress2:[""],
      foreignHomeCity:["",[Validators.required]],
      foreignHomeState:["",[Validators.required]],
      foreignHomeZip:["",[Validators.required]],
      foreignMobile:["",[Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]],
      currentlyresidinginUS:[true],
      USHomeAddress1:["",[Validators.required]],
      USAddress2:[""],
      USHomeCity:["",[Validators.required]],
      USHomeState:["",[Validators.required]],
      USHomeZip:["",[Validators.required]],
      USMobile:["",[Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]]
    });

    if(this.formModel !=undefined){
      this.contactForm.patchValue({
        foreignHomeAddress1:this.formModel.foreignHomeAddress1,
        foreignHomeAddress2:this.formModel.foreignHomeAddress2,
        foreignHomeCity:this.formModel.foreignHomeCity,
        foreignHomeState:this.formModel.foreignHomeState,
        foreignHomeZip:this.formModel.foreignHomeZip,
        foreignMobile:this.formModel.foreignMobile,
        currentlyresidinginUS:this.formModel.currentlyresidinginUS,
        USHomeAddress1:this.formModel.USHomeAddress1,
        USAddress2:this.formModel.USAddress2,
        USHomeCity:this.formModel.USHomeCity,
        USHomeState:this.formModel.USHomeState,
        USHomeZip:this.formModel.USHomeZip,
        USMobile:this.formModel.USMobile
      })
    }

    this.contactForm.valueChanges.subscribe(val =>{
      if(this.contactForm.dirty && this.contactForm.valid){

        this.confidentialFormService.saveModel(this.contactForm.value);
      }
    })
  }
  navigateToPersonal(){
    this.router.navigate(['/confidential','personal'])
  }
  navigateToWork(){
    this.router.navigate(['/confidential','work'])
  }
}
