import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

    private searchUrl: string;
    private artistUrl: string;
    private albumsUrl: string;

    constructor(private _http:Http) {

    }

    searchMusic(str:string, type='artist') {
        this.searchUrl = 'https://api.spotify.com/v1/search?type='+type+'&q='+str+'&offset=0&limit=20';
        return this._http.get(this.searchUrl)
            .map(res => res.json());
    }

    getArtist(id:string) {
        this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;
        return this._http.get(this.artistUrl)
            .map(res => res.json());
    }

    getAlbums(artistId:string) {
        this.albumsUrl = 'https://api.spotify.com/v1/artists/'+artistId+'/albums';
        return this._http.get(this.albumsUrl)
            .map(res => res.json());
    }

}