import { Component, OnInit, Input } from '@angular/core';
import { Etravel, EtravelType } from '../module/etravel';

@Component({
  selector: 'app-item-bestday',
  templateUrl: './item-bestday.component.html',
  styleUrls: ['./item-bestday.component.scss']
})
export class ItemBestdayComponent implements OnInit {
  
  @Input() titleItem: string;
  @Input() items: Etravel[];
  public eTravelType= EtravelType;

  constructor() { }

  ngOnInit() {
  }

}
