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

  it('retun sum of two number', ()=>{
  expect(testDriven.add('1,2')).toBe(3);
  });
  
       it('throw error on negative numbers', ()=>{
  expect(testDriven.add('1,-2,-4')).toThrowError('not allowed negative numbers');
  });
  
       it('handling delimiters', ()=>{
  expect(testDriven.add('1\n3,3')).toBe(7);
  });
  
       it('multiple amount of number', ()=>{
  expect(testDriven.add('1,2,3,4,5,6,7,8')).toBe(36);
  });
}
