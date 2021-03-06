import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompartilhamentoService {
  private messageSource = new Subject();
  currentMessage = this.messageSource.asObservable();
  constructor() {

  }

  
  changeMessage(message: string) {
    this.messageSource.next(message);
  }



  
}
