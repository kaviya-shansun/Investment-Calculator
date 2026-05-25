import { Component, Input, OnInit } from '@angular/core';
import { InvestmentTable } from './investment-table.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-table',
  templateUrl: './investment-table.component.html',
  styleUrls: ['./investment-table.component.css']
})
export class InvestmentTableComponent implements OnInit {
  constructor(public investmentServices: InvestmentService) {
    console.log("investmentServices",investmentServices);
  }

  investdata = this.investmentServices;

  ngOnInit(): void {
  }

}
