import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InvestmentInput } from './investment-calculator.model';

@Component({
  selector: 'app-investment-calculator',
  templateUrl: './investment-calculator.component.html',
  styleUrls: ['./investment-calculator.component.css']
})
export class InvestmentCalculatorComponent implements OnInit {
  @Output() enteredData = new EventEmitter<InvestmentInput>();
  enteredInitialInvestment = 0;
  enteredAnnualInvestment = 0;
  enteredExpectedReturn = 5;
  enteredDuration = 10;

  constructor() { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log("Calculated",this.enteredInitialInvestment,this.enteredAnnualInvestment,this.enteredExpectedReturn,this.enteredDuration);
    this.enteredData.emit({
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnualInvestment
    });
  }



}
