import { Component} from '@angular/core';
import { Heared } from './heared/heared';
import { Main } from './main/main';
import { Footer } from './footer/footer';
import { FormsModule } from '@angular/forms';
import { Product } from './services/product';

@Component({
  selector: 'app-root',
  imports: [FormsModule, Heared, Main, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  products;

  newName: string = '';
  newPrice: number | null = null;
  newQuantity: number | null = null;

  constructor(private productService: Product){
    this.products = this.productService.getProducts();
  }

  addProduct(){
    if(
      this.newName &&
      this.newPrice !== null &&
      this.newQuantity !== null
    ){
      
      this.productService.addProduct(
        this.newName,
        this.newPrice,
        this.newQuantity,
      );

      this.newName = '';
      this.newPrice = null;
      this.newQuantity = null;
    }
  }

  removeProduct(id: number){
    this.productService.removeProduct(id);
  }
}
