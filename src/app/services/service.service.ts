import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  url='https://product-management-19bd.onrender.com/'
  oldurl='http://localhost:4000/'
  getProduct(){
    return this.http.get(this.url+'get')
  }

  getProductvalue(){
    return this.http.get(this.url+'productvalue')
  }
  getCategoryvalue(){
    return this.http.get(this.url+'categoryvalue')
  }

  editProduct(data:any){
    return this.http.post(this.url+'edit',{data:data})
  }

  addProduct(data:any){
    return this.http.post(this.url+'add',{data:data})
  }

  deleteProduct(id:string){
    return this.http.delete(this.url+'delete/'+id)
  }
}
