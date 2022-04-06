import { Component, OnInit } from '@angular/core';
import { recepeListService } from '../Recepes/recepeList.service';
import { dataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
// This is async Pipe promise
  changeShopName = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('Apna Restaurants')},3000) 
  });
  
  content:string = 'recepe';
  ShopName:string = 'Khaana Khazaana'

  constructor(private dataservice:dataStorageService){}

  ShowRecepes()
  {
     this.content='recepe';
  }
  ShowShopping()
  {
    this.content='shopping';
  }

  SaveRecepeHttp()
  {
    this.dataservice.PostRecepeData();
     
  }
  FetchRecepeHttp()
  {
     this.dataservice.GetRecepeData() ;
  }

  ngOnInit(): void {
  }

}
