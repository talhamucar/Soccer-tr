import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../player.model';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-dr',
  templateUrl: './dr.component.html',
  styleUrls: ['./dr.component.css']
})
export class DrComponent implements OnInit {
  @Input() dr: Player;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  onSelected(){
    this.playerService.drSelected.emit(this.dr);
  }

}
