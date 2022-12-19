import {HttpClient} from "@angular/common/http";
import {Adapters} from "../enums/adapters";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ProductService{
   constructor(private http: HttpClient) {
   }

   getProducts(limit: number){
     const url = Adapters.BASE_URL+ 'products?limit='+limit;
     return this.http.get<any>(url);
   }

   getProductDetail(id: number){
     const url = Adapters.BASE_URL+ 'products/'+ id;
     return this.http.get<any>(url);
   }
}
