
export class ConfidentialFormModel{
    constructor(
        public id:number=0,
        public firstName:string="",
        public lastName:string="",
        public middleName?:string,
        public dateOfBirth:Date=undefined,
        public gender:string="",
        public placeOfBirth:string="",
        public provinceOfBirth:string="",
        public countryOfBirth:string="",
        public countryOfCitizenship:string="",
        public socialSecurityNumber?:Number,
        public mobile:Number=undefined,
        public primaryEMail:string="",
        public foreignHomeAddress1:string="",
        public foreignHomeAddress2:string="",
        public foreignHomeCity:string="",
        public foreignHomeState:string="",
        public foreignHomeZip:number=undefined,
        public foreignMobile:number=undefined,
        public currentlyresidinginUS:boolean=true,
        public USHomeAddress1:string="",
        public USAddress2?:string,
        public USHomeCity:string="",
        public USHomeState:string="",
        public USHomeZip:string="",
        public USMobile:number=undefined,
        public placeOfLastEntry:string="",
        public visaUsedforEntry:string="",
        public currentVisaStatus:string="",
        public placeVIsaIssued:string="",
        public passportNumber:string="",
        public issuingCountry:string="",
        public passportIssueDate:Date=undefined,
        public passportExpirationDate:Date=undefined,
        public nameOfUniversity:string="",
        public universityAddress1:string="",
        public universityAddress2?:string,
        public universityCity:string="",
        public universityState:string="",
        public universityZipCode:number=undefined,
        public OPTStartDate:Date=undefined,
        public OPTEndDate:Date=undefined,
        public educationDetails=[],
        public employeeDetails=[]
        ){
    }
}

export interface IConfidentialFormModel{
    id:number;
    firstName:string;
    lastName:string;
    middleName?:string;
    dateOfBirth:Date;
    gender:string;
    placeOfBirth:string;
    provinceOfBirth:string;
    countryOfBirth:string;
    countryOfCitizenship:string;
    socialSecurityNumber?:number;
    mobile:number;
    primaryEMail:string;
    foreignHomeAddress1:string,
    foreignHomeAddress2:string,
    foreignHomeCity:string,
    foreignHomeState:string,
    foreignHomeZip:number,
    foreignMobile:string,
    currentlyresidinginUS:[true],
    USHomeAddress1:string,
    USAddress2:string,
    USHomeCity:string,
    USHomeState:string,
    USHomeZip:string,
    USMobile:string,
    placeOfLastEntry:string,
    visaUsedforEntry:string,
    currentVisaStatus:string,
    placeVIsaIssued:string,
    passportNumber:string,
    issuingCountry:string,
    passportIssueDate:Date,
    passportExpirationDate:Date,
    nameOfUniversity:string,
    universityAddress1:string,
    universityAddress2:string,
    universityCity:string,
    universityState:string,
    universityZipCode:number,
    OPTStartDate:Date,
    OPTEndDate:Date,
    //educationDetails:IEducationDetails[],
    //employeeDetails:IEmployeeDetails[]
}

export class EducationDetails{
    constructor(public educationInstitutionName:string="",
        public major:string="",
        public degreeAwarded:string="",
        public EduStartDate:Date=new Date(),
        public EduEndDate:Date=new Date()){}
}

export class EmployeeDetails{
    constructor(
        public employerName:string="",
        public position:string="",
        public EmpStartDate:Date=new Date(),
        public EmpEndDate:Date=new Date()
    ){}
}