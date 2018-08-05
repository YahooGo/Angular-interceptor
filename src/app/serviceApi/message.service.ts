import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages:any[] =[];
  
  constructor() { }

  add( data ): void{
    this.messages.push( data )
  }
}

