import { Component, OnInit } from '@angular/core';
import { Imusic } from '../../types/Imusic';
import { musics } from "../../types/musicList.json";
const musicList = musics;


@Component({
  selector: 'app-player',
  standalone: true,
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})

export class PlayerComponent implements OnInit{
  currentSong: Imusic | undefined;

  ngOnInit(): void {
    this.playSong(musicList[0])
  }
 
  playSong(song:Imusic) {
    let audio = new Audio();
    audio.src = "../../assets/musics/" + song.fileName;
    audio.load();
    audio.play();
  }

}
