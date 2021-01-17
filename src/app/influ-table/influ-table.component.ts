import { Component } from '@angular/core';

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


}
