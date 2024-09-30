// test driven development for the Angular String Calculator //

import {TestBed} from '@angular/core/testing';
import {stringCalculatorServices} from './ string-calculator.service';

describe('stringCalculatorServices'),() =>{
  let testDriven: stringCalculatorServices;

  before(()=>{
    TestBed.configureTestingModule({});
    testDriven = TestBed.inject(StringCalculatorService);
  })

  it('retun 0 from empty string', ()=>{
    expect(testDriven.add('')).toBe(0);
  });

    it('retun number when number is given', ()=>{
    expect(testDriven.add('1')).toBe(1);
  });
}
