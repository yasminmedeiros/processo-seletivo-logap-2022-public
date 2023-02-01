import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostPutProductInterface, ProductInterface } from 'src/app/interfaces/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  private baseURL = 'https://desafiobackend.herokuapp.com'

  get(){
    return this.http.get<ProductInterface[]>(`${this.baseURL}/product`)
                    .pipe(map((res)=>{
                      return res;
                    }));
  }
  getById(id:string){
    return this.http.get<ProductInterface>(`${this.baseURL}/product/${id}`)
                    .pipe(map((res)=>{
                      return res;
                    }));
  }

  postData(data: PostPutProductInterface, categoryId:string, providerId:string ): Observable<any> {
    return this.http.post(`${this.baseURL}/product/category/${categoryId}/provider/${providerId}`, data)
  }
  updateData(data: PostPutProductInterface, id: string, categoryId:string, providerId:string ): Observable<any> {
    return this.http.put(`${this.baseURL}/product/${id}/category/${categoryId}/provider/${providerId}`, data)
  }
  deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/product/${id}`)
  }
}
