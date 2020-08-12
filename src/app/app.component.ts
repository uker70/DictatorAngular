import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Dictator } from './Dictator'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(){
    this.dictatorData = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      comment: new FormControl('')
    });
  }

  dictatorData:FormGroup;
  dictators: Array<Dictator> = Array<Dictator>();

  onNewDictatorSubmit() {
    if (this.dictatorData.valid)
    {
      console.log(this.dictatorData.value);
      this.dictators.push(this.dictatorData.value);
    }
  }

  deleteThis(){
    if (this.dictatorData.valid)
    {
        for(let counter = 0; counter < this.dictators.length; counter++)
      {
        if((this.dictatorData.get("name").value == this.dictators[counter].name) && 
        (this.dictatorData.get("lastname").value == this.dictators[counter].lastname) && 
        (this.dictatorData.get("dateOfBirth").value == this.dictators[counter].dateOfBirth))
        {
          this.dictators.splice(this.dictators.indexOf(this.dictators[counter]), 1)
          break;
        }
      }
    }
  }
}
