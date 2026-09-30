import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServerCount {
  private count = 0;
  
  getCount(){
    return this.count;
  }

  increment(): void{
    this.count++;
  }

  decrement(): void{
    this.count--;
  }
}
