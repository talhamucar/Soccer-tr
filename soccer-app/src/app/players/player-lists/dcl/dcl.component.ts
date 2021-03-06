import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../player.model';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-dcl',
  templateUrl: './dcl.component.html',
  styleUrls: ['./dcl.component.css']
})
export class DclComponent implements OnInit {
  @Input() dcl: Player;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  onSelected(){
    this.playerService.dclSelected.emit(this.dcl);
  }

}
