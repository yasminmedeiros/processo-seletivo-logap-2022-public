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
  postData(data: PostPutCategoryInterface): Observable<any> {
    return this.http.post('/category', data)
  }
  updateData(data: PostPutCategoryInterface): Observable<any> {
    return this.http.patch('/category', data)
  }
  deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/category/${id}`)
  }
}