import { Component, OnInit } from '@angular/core';
import { ResumeFormData } from '../model/ResumeFormData';

@Component({
  selector: 'app-form-fill',
  templateUrl: './form-fill.component.html',
  styleUrls: ['./form-fill.component.css']
})
export class FormFillComponent implements OnInit {

  formData: ResumeFormData
  showResume: boolean = false;
  constructor() { 
    this.formData ={
      firstName: "",
      middleName: "",
      lastName: "",
      emailId:"",
      mobileNo:"",
      dob:"",
      uni1:"",
      yop1:"",
      perct1:"",
      uni2:"",
      yop2:"",
      perct2:"",
      uni4:"",
      yop4:"",
      perct4:"",
      org1:"",
      doj1:"",
      dor1:"",
      org2:"",
      doj2:"",
      dor2:"",
      tech1:"",
      ver1:"",
      lastworkdone1:"",
      rate1:"",
      tech2:"",
      ver2:"",
      lastworkdone2:"",
      rate2:"",
      textarea1:"",
      textarea2:"",
    }
    
  }

  ngOnInit(): void {
  }

  saveFormData() {
    console.log(this.formData);
    localStorage.setItem("formData", JSON.stringify(this.formData));
    this.showResume = true;
  }
}
