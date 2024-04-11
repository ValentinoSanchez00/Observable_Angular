import { Subject } from 'rxjs';
import { Villano } from './../Models/villano/villano.module';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class VillanoService {
  private villanos:Villano[]
  private Villanos$:Subject<Villano[]> 

  constructor() {
    this.villanos=[]
    this.Villanos$ = new Subject()
   }

   addVillano(villano:Villano){
    this.villanos.push(villano)
    this.Villanos$.next(this.villanos)

   }

   getVillanos(){
    return this.Villanos$.asObservable()
   }
}
