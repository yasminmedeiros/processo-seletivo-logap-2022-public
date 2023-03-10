import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CategoryInterface, PostPutCategoryInterface } from 'src/app/interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  private baseURL = 'https://desafiobackend.herokuapp.com'

  get(){
    return this.http.get<CategoryInterface[]>(`${this.baseURL}/category`)
                    .pipe(map((res)=>{
                      return res;
                    }))
  }
  getById(id: string){
    return this.http.get<CategoryInterface>(`${this.baseURL}/category/${id}`)
                    .pipe(map((res)=>{
                      return res;
                    }))
  }
  postData(data: PostPutCategoryInterface): Observable<any> {
    return this.http.post(`${this.baseURL}/category`, data)
  }
  updateData(data: PostPutCategoryInterface, id:string): Observable<any> {
    return this.http.put(`${this.baseURL}/category/${id}`, data)
  }
  deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/category/${id}`)
  }
}