import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'influ-table',
  templateUrl: './influ-table.component.html',
  styleUrls: ['./influ-table.component.css']
})
export class InfluTableComponent {

  bezig = "prrrt";

  dummyArray = Array(1).fill(4);

  testje() { 
    this.dummyArray.push("4");
  }

  profileForm = this.fb.group({
    discount_companies: this.fb.array([
      this.fb.control('')
    ]),
    discount_codes: this.fb.array([
      this.fb.control('')
    ]),
    influencers: this.fb.array([
      this.fb.control('')
    ])
  });

  get discount_companies() {
    return this.profileForm.get('discount_companies') as FormArray;
  }

  get discount_codes() {
    return this.profileForm.get('discount_codes') as FormArray;
  }

  get influencers() {
    return this.profileForm.get('influencers') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  addDiscountCompany() {
    this.discount_companies.push(this.fb.control(''));
  }

  addDiscountCode() {
    this.discount_codes.push(this.fb.control(''));
  }

  addInfluencer() {
    this.influencers.push(this.fb.control(''));
  }

  getDiscountCompany(index) {
    var formArray = this.profileForm.get('discount_companies') as FormArray;
    return formArray.at(index).value;
  }

  getDiscountCode(index) {
    var formArray = this.profileForm.get('discount_codes') as FormArray;
    return formArray.at(index).value;
  }

  getInfluencer(index) {
    var formArray = this.profileForm.get('influencers') as FormArray;
    return formArray.at(index).value;
  }
}
