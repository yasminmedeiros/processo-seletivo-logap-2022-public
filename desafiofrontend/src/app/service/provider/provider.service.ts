import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProviderInterface,PostPutProviderInterface } from 'src/app/interfaces/provider';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {

 constructor(private http:HttpClient) { }
  private baseURL = 'https://desafiobackend.herokuapp.com'

  get(){
    return this.http.get<ProviderInterface[]>(`${this.baseURL}/provider`)
                    .pipe(map((res)=>{
                      return res;
                    }))
  }
  getById(id: string){
    return this.http.get<ProviderInterface>(`${this.baseURL}/provider/${id}`)
                    .pipe(map((res)=>{
                      return res;
                    }))
  }
  postData(data: PostPutProviderInterface): Observable<any> {
    return this.http.post(`${this.baseURL}/provider`, data)
  }
  updateData(data: PostPutProviderInterface, id:string): Observable<any> {
    return this.http.put(`${this.baseURL}/provider/${id}`, data)
  }
  deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/provider/${id}`)
  }
}