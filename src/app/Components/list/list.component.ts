import { Component, OnInit } from '@angular/core';
import { Villano } from 'src/app/Models/villano/villano.module';
import { VillanoService } from 'src/app/Services/villano.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public villanos:Villano[]=[]

  constructor(private VillanoService:VillanoService) { }

  ngOnInit(): void {
    this.VillanoService.getVillanos().subscribe((villanosSuscribe)=>{
      this.villanos = villanosSuscribe
    })
  }
}
