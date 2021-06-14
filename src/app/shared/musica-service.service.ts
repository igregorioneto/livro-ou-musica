import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedServiceService } from './shared-service.service';

@Injectable({
  providedIn: 'root'
})
export class MusicaServiceService {

  constructor(private http: HttpClient, private shared: SharedServiceService) { }

  getMusicaDB() {
    this.http.get<any>('http://localhost:3000/musica')
    .subscribe(result => {
      this.shared.verifyResult(result)      
    })
  }

  createMusicaDB(musica: any) {
    this.http.post<any>('http://localhost:3000/musica',musica)
    .subscribe(result => {
      this.shared.verifyResult(result)   
    })
  }

  deleteMusicaDB(id: number) {
    this.http.delete<any>(`http://localhost:3000/musica/${id}`)
    .subscribe(result => {
      this.shared.verifyResult(result)   
    })
  }
}
