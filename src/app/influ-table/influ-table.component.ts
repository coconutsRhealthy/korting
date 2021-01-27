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
    aliasesr: this.fb.array([
      this.fb.control('')
    ]),
    beasts: this.fb.array([
      this.fb.control('')
    ]),
  });

  get aliasesr() {
    return this.profileForm.get('aliasesr') as FormArray;
  }

  get beasts() {
    return this.profileForm.get('beasts') as FormArray;
  }

  getZzz() {
    return this.profileForm.get('aliasesr') as FormArray;
  }

  constructor(private fb: FormBuilder) { }


  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  addAlias() {
    this.aliasesr.push(this.fb.control(''));

    var hmm = this.getZzz();

    alert(hmm.at(0).value);
  }

  addBeast() {
    this.beasts.push(this.fb.control(''));

    //var hmm = this.getZzz();

    //alert(hmm.at(0).value);
  }

  getThaDingetjuh(index) {
    var hmm = this.profileForm.get('aliasesr') as FormArray;
    return hmm.at(index).value;
  }

}
