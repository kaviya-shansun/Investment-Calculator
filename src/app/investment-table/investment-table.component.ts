import { Component, Input, OnInit } from '@angular/core';
import { InvestmentTable } from './investment-table.model';

@Component({
  selector: 'app-investment-table',
  templateUrl: './investment-table.component.html',
  styleUrls: ['./investment-table.component.css']
})
export class InvestmentTableComponent implements OnInit {
  @Input() annualData !: InvestmentTable[];
  constructor() { 
    console.log("annualData",this.annualData)
  }

  ngOnInit(): void {
  }

}
