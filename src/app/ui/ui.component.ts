import { Component } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent {

  lengthOptions = [
    {
      id: 0,
      label: 'Kilometre',
      unit: 'km'
    },
    {
      id: 1,
      label: 'Metre',
      unit: 'm'
    },
    {
      id: 2,
      label: 'Centimetre',
      unit: 'cm'
    }
  ];

  inp: number = 0;
  resultinp: number = 0;
  op1: string = '';
  op2: string = '';

  convert(value: string) 
  {
    if (value === 'inp') 
    {
      if (this.op1 === 'Kilometer' && this.op2 === 'Meter') 
      {
        this.resultinp = this.inp * 1000;
      } 

      else if (this.op1 === 'Kilometer' && this.op2 === 'Kilometer') 
      {
        this.resultinp = this.inp;
      }

      else if (this.op1 === 'Kilometer' && this.op2 === 'Centimeter') 
      {
        this.resultinp = this.inp*100000;
      }

      else if (this.op1 === 'Meter' && this.op2 === 'Kilometer') 
      {
        this.resultinp = this.inp/1000;
      }
      else if (this.op1 === 'Meter' && this.op2 === 'Meter') 
      {
        this.resultinp = this.inp;
      }

      else if (this.op1 === 'Meter' && this.op2 === 'Centimeter') 
      {
        this.resultinp = this.inp*100;
      }
     
      else if (this.op1 === 'Centimeter' && this.op2 === 'Kilometer') 
      {
        this.resultinp = this.inp/100000;
      }
      else if (this.op1 === 'Centimeter' && this.op2 === 'Meter') 
      {
        this.resultinp = this.inp*0.01;
      }

      else if (this.op1 === 'Centimeter' && this.op2 === 'Centimeter') 
      {
        this.resultinp = this.inp;
      }
   
    }
    
    



    else if (value === 'resultinp') 
    {
      if (this.op2 === 'Kilometer' && this.op1 === 'Meter') 
      {
        this.inp = this.resultinp / 1000;
      } 
    

      else if (this.op2 === 'Kilometer' && this.op1 === 'Kilometer') 
      {
        this.inp = this.resultinp;
      }
      else if (this.op2 === 'kilometer' && this.op1 === 'Centimeter') 
      {
        this.inp = this.resultinp/100000;
      }
  

      else if (this.op2 === 'Meter' && this.op1 === 'Kilometer') 
      {
        this.inp = this.resultinp * 1000;
      }

      else if (this.op2 === 'Meter' && this.op1 === 'Meter') 
      {
        this.inp = this.resultinp;
      }
      else if (this.op2 === 'Meter' && this.op1 === 'Centimeter') 
      {
        this.inp = this.resultinp*100;
      }

      else if (this.op2 === 'Centimeter' && this.op1 === 'Kilometer') 
      {
        this.inp = this.resultinp*100000;
      }
      else if (this.op2 === 'Centimeter' && this.op1 === 'Meter') 
      {
        this.inp = this.resultinp/0.01;
      }
      else if (this.op2=== 'Centimeter' && this.op1 === 'Centimeter') 
      {
        this.inp = this.resultinp;
      }

    }
 
  }
}
