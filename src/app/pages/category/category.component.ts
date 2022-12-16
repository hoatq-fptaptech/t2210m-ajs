import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'page-category',
  templateUrl: './category.component.html'
})
export class CategoryComponent{
  products: any = [];
  limit: number = 10;
  constructor(private http: HttpClient) {
  }

  ngOnInit(){
      this.getProducts();
  }

  getProducts(){
    const url = 'https://dummyjson.com/products?limit='+this.limit;
    this.http.get<any>(url).subscribe(data=>{
      this.products = data.products;
    })
  }

  loadMore(){
    this.limit+=10;
    this.getProducts();
  }
}
