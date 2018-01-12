import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, FormArray } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ConfidentialFormModel } from "../shared/ConfidentialFormModel";
import { ConfidentialService } from "../ConfidentialFormService/confidential.service";
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  public educationForm:FormGroup;
  public formModel:ConfidentialFormModel;

  constructor(private fb:FormBuilder, 
    private route:ActivatedRoute,
    private router:Router,
    private confidentialFormService:ConfidentialService
  ) {
    this.formModel = this.confidentialFormService.ConfiddentialFormModel();
  }

  ngOnInit() {
    this.educationForm = this.fb.group({
      employeeDetails: this.fb.array([this.buildEmployeeGroup()]),
      educationDetails: this.fb.array([ this.buildEducationGroup()])
    });
    this.educationForm.valueChanges.subscribe(val=>{
      if(this.educationForm.dirty && this.educationForm.valid){
        this.confidentialFormService.saveModel(this.educationForm.value);
      }
    })

    if(this.formModel !=undefined){
      this.educationForm.patchValue({
        employeeDetails: this.formModel.employeeDetails,
        educationDetails: this.formModel.educationDetails
      })
    }

  };

  addemployeeGroup():void{
    this.employeeGroup.push(this.buildEmployeeGroup());
  }

  removeemployeeGroup(index:number):void{
    this.employeeGroup.removeAt(index);
  }

  addeducationGroup():void{
    this.educationGroup.push(this.buildEducationGroup());
  }

  removeeducationGroup(index:number):void{
    this.educationGroup.removeAt(index);
  }
  
  get employeeGroup():FormArray{
    return <FormArray>this.educationForm.get('employeeDetails');
  }

  get educationGroup():FormArray{
    return <FormArray>this.educationForm.get('educationDetails');
  }

  buildEmployeeGroup() : FormGroup{
    return this.fb.group({
      employerName:["",[Validators.required]],
      position:["",[Validators.required]],
      EmpStartDate:["",[Validators.required]],
      EmpEndDate:["",[Validators.required]]
    });
  }
  buildEducationGroup() : FormGroup{
    return this.fb.group({
      educationInstitutionName:["",[Validators.required]],
      major:["",[Validators.required]],
      degreeAwarded:["",[Validators.required]],
      EduStartDate:["",[Validators.required]],
      EduEndDate:["",[Validators.required]]
    });
  };

  navigateToWork(){
    this.router.navigate(['/confidential','work'])
  }
}
