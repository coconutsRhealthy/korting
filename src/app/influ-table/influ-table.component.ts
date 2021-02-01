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

  tableHeight = 500;
  tableWidth = 500;
  tableFontSize = 18;
  tableRowHeight = 30;
  tableRowLineHeight = 30;
  tableRowMinHeight = 30;

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

  addAll() {
    this.discount_companies.push(this.fb.control(''));
    this.discount_codes.push(this.fb.control(''));
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

  calculateTableStyle() {
     //var numberOfRows = this.discount_companies.length;

     this.tableHeight = 500;
     this.tableWidth = 500;

     this.tableRowHeight = 0.0004;
     this.tableRowLineHeight = 0.0004;
     this.tableRowMinHeight = 0.0004;


    //this.tableRowHeight = 6;

    //this.tableLineHeight = 40;

    //alert(this.discount_companies.length);



    //this.tableLineHeight = 300 / numberOfRows;

    //alert(this.tableLineHeight);

    //this.tableFontSize = 7;


    //this.tableHeight = 300;
    //this.tableWidth = 300;
    //this.tableLineHeight = 60;
    //this.tableFontSize = 28;
  }

  deleteRow(index) {
    this.discount_companies.removeAt(index);
    this.discount_codes.removeAt(index);
    this.influencers.removeAt(index);
  }

  sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("insta-table");
    switching = true;
    dir = "asc";

    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;

        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];

        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
}
