import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from "@ng-select/ng-select";
import { NdmajobService } from '../../services/hrJob/ndmajob.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { log } from 'console';


@Component({
  selector: 'app-ndma-form',
  standalone: true,
  imports: [FormsModule, NgSelectModule, NgFor, NgIf, RouterLink, JsonPipe],
  templateUrl: './ndma-form.component.html',
  styleUrl: './ndma-form.component.css'
})
export class NdmaFormComponent implements OnInit {



  hrForm = {
    position: '',
    firstname: "",
    lastname: "",
    gender: "male",
    isToc: true,
    email: "",
    phoneNum: "",
    address: {
      street: '',
      city: ''
    }
  };

  CommuniAddress = {
    addressComm: '',
    stateAdd: "",
    cityAdd: "",
    pincodeAdd: "",
    streetNo: "",
    districtAdd: ""

  };
  PermanentAddress = {
    addressPer: '',
    statePer: "",
    cityPer: "",
    pincodePer: "",
    streetNoPer: "",
    districtPer: ""

  };


  eduRow = [{ id: 1, name: 'education' }]
  id: any;
  trainingRow = [{ id: 1, name: 'training' }]
  expRow = [{ id: 1, name: 'experience' }]
  referenceRow = [{ id: 1, name: 'references' }]
  oneduDel: boolean = false;
  ontrainDel: boolean = false;
  onexpDel: boolean = false;
  onrefDel: boolean = false;
  showSpouse: boolean = false;
  showPayBand: boolean = false;
  totalAge: number = 0;
  copyData: boolean = false;

  yesNoPay = [
    { id: 1, lastPay: "Yes" },
    { id: 1, lastPay: "No" },

  ]
  Expertise = [
    { id: 1, Expertise: "Cash and Voucher" },
    { id: 2, Expertise: "Child Protection" },
    { id: 3, Expertise: "Climate Change" },
  ];

  Hazard = [
    { id: 1, Hazard: "Earthquakes" },
    { id: 2, Hazard: "Volcanic Eruptions" },
    { id: 3, Hazard: "Tsunamis" },
  ];

  marital = [
    { id: 1, marital: "Married" },
    { id: 2, marital: "Unmarried" },
    { id: 3, marital: "Divorced" },
    { id: 4, marital: "Widow" },
  ];
  gender = [
    { id: 1, gender: "Male" },
    { id: 2, gender: "Female" },
    { id: 3, gender: "Transgender" },
  ];
  Salutation = [
    { id: 1, Salutation: "Mr." },
    { id: 2, Salutation: "Mrs." },
    { id: 3, Salutation: "Miss." },
  ];

  constructor(public jobServ: NdmajobService, private routeId: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeId.params.subscribe(params => {
      this.id = params['id'];
    });
  }


  // submit form data
  onSubmit(val: any) {
    val.position = this.id;
    console.log(val, 'aya');
    this.jobServ.sendData(val).subscribe((e)=>{
      if(e.status == 'success'){
        console.log('sucess',e.data);
      }
      else{
        console.log("Data not found");
        
      }
      
    })

  }


  onMaritalStatusSelected(event: any) {
    if (event.marital == 'Married') {
      this.showSpouse = true;
    }
    else {
      this.showSpouse = false;
    }
  }
  onPayBand(event: any) {
    if (event.lastPay == 'Yes') {
      this.showPayBand = true;
    }
    else {
      this.showPayBand = false;
    }
  }

  //coppy address
  copyAddress(event: any) {
    this.copyData = !this.copyData;
    console.log(this.copyData);

    if (this.copyData) {
      this.PermanentAddress.addressPer = this.CommuniAddress.addressComm
      this.PermanentAddress.cityPer = this.CommuniAddress.cityAdd
      this.PermanentAddress.statePer = this.CommuniAddress.stateAdd
      this.PermanentAddress.pincodePer = this.CommuniAddress.pincodeAdd
      this.PermanentAddress.streetNoPer = this.CommuniAddress.streetNo
      this.PermanentAddress.districtPer = this.CommuniAddress.districtAdd
    }
    else {
      this.PermanentAddress.addressPer = '',
        this.PermanentAddress.cityPer = '',
        this.PermanentAddress.statePer = '',
        this.PermanentAddress.pincodePer = '',
        this.PermanentAddress.streetNoPer = ''
      this.PermanentAddress.districtPer = ''
    }
  }

  //for calculate age
  calculateAge(event: any) {
    console.log(event.target.value);
    let selectedDate = event.target.value;
    const birthDate = new Date(selectedDate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    // If the birth month hasn't occurred yet in this year, decrement age
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    this.totalAge = age;

    console.log('Age:', age);
  }



  trackVal() {
    console.log('j')
  }

  onChangeFunction(event: any) {
    console.log("Value changed:", event);
    // Perform actions you want to do when the value changes
  }

  //adding row
  addRow(delBtn: any, arr: any) {
    arr.push({ id: Date.now(), name: "education" });
    if (arr.length > 2) {
      if (delBtn == "ontrainDel") {
        this.ontrainDel = true;
      }
      else if (delBtn == "oneduDel") {
        this.oneduDel = true;
      }
      else if (delBtn == "onexpDel") {
        this.onexpDel = true;
      }
      else if (delBtn == "onrefDel") {
        this.onrefDel = true;
      }
    }
  }

  // delRow(delBtn: any, arr: any) {
  //   arr.pop();

  //   if (arr.length == 2 || arr.length < 2) {
  //     if (delBtn == "ontrainDel") {
  //       this.ontrainDel = false;
  //     }
  //     else if (delBtn == "oneduDel") {
  //       this.oneduDel = false;
  //     }
  //     else if (delBtn == "onexpDel") {
  //       this.onexpDel = false;
  //     }
  //   }
  // }


  //for delete particular row
  del(i: any, arr: any, chk: any) {
    if (chk == 'trainingRow') {
      this.trainingRow = arr.filter((e: { id: any; }) => e.id != i);
    }
    else if (chk == 'eduRow') {
      this.eduRow = arr.filter((e: { id: any; }) => e.id != i);
    }
    else if (chk == 'referenceRow') {
      this.referenceRow = arr.filter((e: { id: any; }) => e.id != i);
    }
    else {
      this.expRow = arr.filter((e: { id: any; }) => e.id != i);
    }
  }

  //function for calculate the Daterange
  calRange(e: any, index: any, type: any) {
    console.log(e);


    let endDateVal = new Date(e.target.value); // Convert end date value to Date object
    console.log(endDateVal);

    let startDateVal = document.getElementById(`start${type}Date${index}`) as HTMLInputElement;
    let startDate = new Date(startDateVal.value); // Convert start date value to Date object

    // Calculate the difference in milliseconds
    let differenceMs = endDateVal.getTime() - startDate.getTime();

    // Convert milliseconds to days
    let differenceDays = differenceMs / (1000 * 60 * 60 * 24);

    // Calculate difference in years and months
    let differenceYears = endDateVal.getFullYear() - startDate.getFullYear();
    let differenceMonths = endDateVal.getMonth() - startDate.getMonth();

    // Adjust difference in years and months if necessary
    if (differenceMonths < 0) {
      differenceYears--;
      differenceMonths += 12;
    }

    let totalTimeInput = document.getElementById(`total${type}Time${index}`) as HTMLInputElement;

    if (differenceYears > 0) {
      totalTimeInput.value = `${differenceYears} years and ${differenceMonths} months`;
    } else if (differenceMonths > 0) {
      totalTimeInput.value = `${differenceMonths} months`;
    } else {
      totalTimeInput.value = `${differenceDays} days`;
    }
  }
}




