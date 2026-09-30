import { Component } from '@angular/core';
import { ServerCount } from '../../services/server-count';  

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  constructor(private countServer: ServerCount){}
  
  get count(){
    return this.countServer.getCount();
  }

  increment(): void{
    this.countServer.increment();
  }

  decrement(): void{
    this.countServer.decrement();
  }

}