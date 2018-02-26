import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }
  login(user, cb){
    //console.log('service works!', user)
    this._http.post('/login', user).subscribe((res)=>{
      cb(res)
    })
  }
  checkSession(cb){
    //console.log('in checkSession service')
    this._http.get('/checkSession').subscribe((res)=>{
      cb(res)
    })
  }
  getAllCities(cb){
    this._http.get('/getAllCities').subscribe((res)=>{
      cb(res)
    })
  }
  addCity(city, cb){
    //console.log('in service addcity', city)    
    this._http.post('/addCity', city).subscribe((res)=>{
      cb(res)
    })
  }
  delete(id, cb){
    //console.log('in delete service ', id)
    this._http.post('/delete',id).subscribe((res)=>{
      cb(res)
    })
  }
}
