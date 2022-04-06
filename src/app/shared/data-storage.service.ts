import { HttpClient } from "@angular/common/http";
import { Type } from "@angular/compiler";
import { Injectable } from "@angular/core";

import { RECE } from "../Recepes/RECE";
import { recepeListService } from "../Recepes/recepeList.service";

@Injectable({providedIn:'root'})
export class dataStorageService
{
    constructor(private http:HttpClient, private recepeService:recepeListService){}
    
     PostRecepeData(){
         let AllRecepe:RECE[] = this.recepeService.getRecList() ;
         console.log('Recepe List len on Post:- ',AllRecepe.length)
         this.http.put('https://course-project-udemy-c84c8-default-rtdb.firebaseio.com/recepes.json',
          AllRecepe).subscribe((response)=>{
            console.log('https POST service response is : ', response);
          })
     }
     GetRecepeData(){
         
        this.http.get<RECE[]>('https://course-project-udemy-c84c8-default-rtdb.firebaseio.com/recepes.json')
        .subscribe((response)=>{
            console.log('https GET service response is : ', response);
            this.recepeService.RecList = response;
        })
     }
    
}