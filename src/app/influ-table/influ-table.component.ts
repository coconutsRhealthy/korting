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
  tableLineAndFontColor = "brown";
  tableBackgroundColor = "green";
  kortingDate = "1 jan";
  kortingDateFontSize = 10;
  headerFontSize = 14;
  bodyFontSize = 14;

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

  makeTableBlackYellow(backGroundColour) {
    if(backGroundColour === 'black') {
      this.tableBackgroundColor = '#000000';
      this.tableLineAndFontColor = '#FFFF00';
    } else if(backGroundColour === 'yellow') {
      this.tableBackgroundColor = '#FFFF00';
      //this.tableBackgroundColor = '#FFA500';
      this.tableLineAndFontColor = '#000000';
    }
  }

  changeTableBackgroundColour() {
    this.tableBackgroundColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    this.tableLineAndFontColor = this.invertColor(this.tableBackgroundColor);
  }

  printData() {
    var influencers = this.profileForm.get('influencers') as FormArray;
    var companies = this.profileForm.get('discount_companies') as FormArray;
    var codes = this.profileForm.get('discount_codes') as FormArray;

    var toPrint = "";

    for (var i = 0; i < influencers.length; i++) {
      toPrint = toPrint + "{\n" +
                        "\"company\": \"" + companies.at(i).value + "\",\n" +
                        "\"code\": \"" + codes.at(i).value + "\",\n" +
                        "\"via\": \"" + influencers.at(i).value + "\",\n" +
                        "\"date\": \"2019-09-13\",\n" +
                        "},\n";
    }

    console.log(toPrint);
  }

  getRandomHexColour() {
    return '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
  }

  invertColor(hex) {
      if (hex.indexOf('#') === 0) {
          hex = hex.slice(1);
      }

      if (hex.length === 3) {
          hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }
      if (hex.length !== 6) {
          throw new Error('Invalid HEX color.');
      }

      var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
          g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
          b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);

      return '#' + this.padZero(r) + this.padZero(g) + this.padZero(b);
  }

  padZero(str) {
      var len = 2;
      var zeros = new Array(len).join('0');
      return (zeros + str).slice(-len);
  }
}
