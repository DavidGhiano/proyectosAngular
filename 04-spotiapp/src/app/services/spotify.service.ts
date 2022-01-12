import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient
  ) { }

  private getQuery( query:string ){
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQBdi2UciMhRn1qtKA7mTS3WngUvZP8xq-7cTMOYjXIdlahjL-kIu3FECOe9R8IpXfN8LXL57DkYCrEe1uY'
    })
    return this.http.get( url, { headers } );
  }


  getNewRelease() {

    return this.getQuery('browse/new-releases')
                .pipe( map ( ( data:any ) => data.albums.items ));
  }

  getArtistas( termino:string ){
    
    return this.getQuery(`search?q=${ termino }&type=artist&limit=10`)
                .pipe( map ( ( data:any ) => data.artists.items ));
  }

  getArtista( id:string ){
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks ( id:string ){
    return this.getQuery(`artists/${ id }/top-tracks?market=us`)
              .pipe( map ( ( data:any ) => data.tracks ));
  }
}
