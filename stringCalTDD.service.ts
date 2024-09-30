// Service file code for the string Calculator for angular //

import {injectable} from '@angular/core';

@Injectable({
  providedIn :'root'
})

  export class stringCalTDD{

  constructor(){}

  add(numbers: string): number{
    if(!numbers) return 0;
    const patternDelimiters = /\/\/(.)\n;
    let delimiter = ',';
    let stringNumber = number;

    if(number.match(patternDelimiters)){
      const matches = number.match(patternDelimiters);
      delimiter = matches![1];
      stringNumber = number.split('\n')[1];
    }

    stringNumber = stringNumber.replace(/\n/g, delimiter);

    const numberArray = stringNumber.split(new RegExp(`[${delimiter}]`)).map(Numer);

    const negtiveNumber = numberArray.filter(n => n < 0);
    if(negtiveNumber.length > 0){
      throw new Error (`Negative number is not allowed`: ${negtiveNumber.join(', ')}`);

      return numberArray.reduce((sum,num)=> sum + num, 0);
    }
  }  
  }
