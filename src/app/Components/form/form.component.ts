import { VillanoService } from './../../Services/villano.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public form: FormGroup;
  constructor( private VillanoService:VillanoService) { 
    this.form = new FormGroup({
      nombre: new FormControl(),
      pelicula: new FormControl(),
      color: new FormControl()
    });
  }
  
  ngOnInit(): void {
  }

  onSubmit(){
    this.VillanoService.addVillano(this.form.value)
    this.form.reset()
  }
}
