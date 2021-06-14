import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedServiceService } from './shared-service.service';

@Injectable({
  providedIn: 'root'
})
export class LivroServiceService {

  constructor(private http: HttpClient, private shared: SharedServiceService) { }

  getLivrosDB() {
    this.http.get<any>('http://localhost:3000/livro')
    .subscribe(result => {
      this.shared.verifyResult(result)
    })
  }

  createLivrosDB(livro: any) {
    this.http.post<any>('http://localhost:3000/livro',livro)
    .subscribe(result => {
      this.shared.verifyResult(result)
    })
  }

  deleteLivrosDB(id: number) {
    this.http.delete<any>(`http://localhost:3000/livro/${id}`)
    .subscribe(result => {
      this.shared.verifyResult(result)
    })
  }
}
