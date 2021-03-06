import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../player.model';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-dmc',
  templateUrl: './dmc.component.html',
  styleUrls: ['./dmc.component.css']
})
export class DmcComponent implements OnInit {
  @Input() dmc: Player;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  onSelected(){
    this.playerService.dmcSelected.emit(this.dmc);
  }

}
