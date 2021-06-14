import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() { }

  verifyResult(result: any): boolean | Error {
    try{
      if(result) {
        return result
      } else {
        return false
      }
    }catch(err) {
      return err
    } 
  }
}
