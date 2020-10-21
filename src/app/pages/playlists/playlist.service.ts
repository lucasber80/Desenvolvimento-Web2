import { Injectable } from '@angular/core';
import { playlists } from './mock-playlist';
import { PlaylistInterface } from './playlist';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor() { }

  all(): PlaylistInterface[] {
    return playlists;
  }

  insert(playlist:PlaylistInterface){
    playlists.push(playlist);
  }
}
