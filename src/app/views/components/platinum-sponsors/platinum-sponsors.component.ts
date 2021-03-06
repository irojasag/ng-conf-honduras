import { Component, Input, OnInit } from '@angular/core';
import { ISponsor } from 'src/app/core/models/sponsor.interface';

@Component({
  selector: 'app-platinum-sponsors',
  templateUrl: './platinum-sponsors.component.html',
  styleUrls: ['./platinum-sponsors.component.scss']
})
export class PlatinumSponsorsComponent implements OnInit {

  @Input() sponsors: ISponsor[];
  constructor() { }

  ngOnInit(): void {
  }

}
