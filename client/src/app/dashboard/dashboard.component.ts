import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service'
import { HttpBackend } from '@angular/common/http/src/backend';
import { HttpSentEvent } from '@angular/common/http/src/response';
import { Router } from '@angular/router' 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // has to be an object in order to pass it to back end
  user: object
  city: object
  cities: Array<any>
  //set attributes and in html it will assign values dynamically
  constructor(private _httpService: HttpService, private _router: Router) {
    this.user = {name: null}
    this.city = {name: null}
    this.cities = []
  }

  ngOnInit() {
    //this.checkSession()
    this.getAllCities()
  }
  checkSession(){
    this._httpService.checkSession((res)=>{
      if(!res){
        this._router.navigate(['/'])
      }
      this.user = res
    })
  }
  getAllCities(){
    this._httpService.getAllCities((res)=>{
      this.cities = res
      //console.log(this.cities)
    })
  }
  addCity(){
    //console.log('in component addcity', this.city)
    this._httpService.addCity(this.city, (res)=>{
      this.cities.push(res)
      this.city = {name: null}
    })
  }
  delete(id, index){
    //console.log(id, index)
    this._httpService.delete({'id': id}, (res)=>{
      this.cities.splice(index,1)
    })
  }
}
