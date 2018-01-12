import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from '@angular/router'
import { ConfidentialFormModel } from '../shared/ConfidentialFormModel';
import { ConfidentialService } from '../ConfidentialFormService/confidential.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-confidential',
  templateUrl: './confidential.component.html',
  styleUrls: ['./confidential.component.css']
})
export class ConfidentialComponent implements OnInit {
  private formModel:ConfidentialFormModel;
  private currentProduct: ConfidentialFormModel;
  private originalProduct: ConfidentialFormModel;
  private dataIsValid: { [key: string]: boolean } = {};

  get isDirty(): boolean {
      return JSON.stringify(this.originalProduct) !== JSON.stringify(this.currentProduct);
  }

  constructor(private route:ActivatedRoute, private confidentialServie:ConfidentialService, 
    private flashmessages:FlashMessagesService) { 
    this.route.data.subscribe(data => {
        this.onProductRetrieved(data['formModel']);

   });
  }

   ngOnInit() {
        
  }

  onProductRetrieved(product: ConfidentialFormModel): void {
    this.formModel = product;
}


  isValid(path: string): boolean {
    this.validate();
    if (path) {
        return this.dataIsValid[path];
    }
    return (this.dataIsValid &&
        Object.keys(this.dataIsValid).every(d => this.dataIsValid[d] == true));
}
getval(){
  console.log(this.isValid(null),
  this.isValid('personal'),
  this.isValid('contact'),
  this.isValid('work'),
  this.isValid('education'),
);
}
validate(): void {
  this.dataIsValid = {};
  if (this.formModel.firstName &&
    this.formModel.lastName &&
    this.formModel.middleName &&
    this.formModel.dateOfBirth&&
    this.formModel.gender&&
    this.formModel.placeOfBirth&&
    this.formModel.provinceOfBirth&&
    this.formModel.countryOfBirth&&
    this.formModel.countryOfCitizenship&&
    this.formModel.mobile&&
    this.formModel.primaryEMail) {
      this.dataIsValid['personal'] = true;
  } else {
      this.dataIsValid['personal'] = false;
  }
  if (this.formModel.foreignHomeAddress1 &&
    this.formModel.foreignHomeCity&&
    this.formModel.foreignHomeState&&
    this.formModel.foreignHomeZip&&
    this.formModel.foreignMobile) {
      this.dataIsValid['contact'] = true;
  } else {
      this.dataIsValid['contact'] = false;
  }

  if (this.formModel.placeOfLastEntry&&
    this.formModel.visaUsedforEntry&&
    this.formModel.currentVisaStatus&&
    this.formModel.placeVIsaIssued&&
    this.formModel.passportNumber&&
    this.formModel.issuingCountry&&
    this.formModel.passportIssueDate&&
    this.formModel.passportExpirationDate&&
    this.formModel.nameOfUniversity&&
    this.formModel.universityAddress1&&
    this.formModel.universityCity&&
    this.formModel.universityState&&
    this.formModel.universityZipCode&&
    this.formModel.OPTStartDate&&
    this.formModel.OPTEndDate) {
    this.dataIsValid['work'] = true;
} else {
    this.dataIsValid['work'] = false;
}

if ( this.formModel.employeeDetails.length !=0,
   this.formModel.educationDetails.length !=0) {
  this.dataIsValid['education'] = true;
} else {
  this.dataIsValid['education'] = false;
}
}

    saveData(){
        this.formModel = this.confidentialServie.ConfiddentialFormModel();
          console.log(this.formModel);
        if(this.isValid(null)){
            var data = this.confidentialServie.saveToDatbase(this.formModel);
            this.flashmessages.show(`your data saved...! your details Id is ${data}`, { cssClass: 'alert-success', timeout: 3000 })
            
        }
        else{
            this.flashmessages.show(`please fill all Details`,{ cssClass: 'alert-danger', timeout: 3000 });
        }
    }

}
