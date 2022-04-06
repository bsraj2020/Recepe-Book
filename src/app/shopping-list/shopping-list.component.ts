import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { filter, interval, map, observable, Observable, Subscription } from 'rxjs';

import { ingredient } from '../shared/ingredient';
import { LoggerService } from '../shared/services';
import { shoppingListService } from './shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers:[shoppingListService]
  
})
export class ShoppingListComponent implements OnInit,OnDestroy {

   ingreList: ingredient[] = [  ];
   message:string = "Welcome from Parent compoenent"; // parent -> child data transfer
  constructor(private loggerService:LoggerService,private shoppingListservice:shoppingListService) { }
 
    firstSubscription = new Subscription() ;
    curIngre!:ingredient;

  ngOnInit(): void {
    console.log('shopping list ka OnInit')
    this.ingreList = this.shoppingListservice.getIngreList()
   
   /*
   interval(1000).subscribe(
     (count)=>{console.log( "ineterval Observable", count)}
   )*/


   let customObservable = new Observable(observer=>{
    let count=0
    setInterval(()=>{  
      observer.next(count++) ;
      if(count===4) observer.complete()
      if(count>5){ observer.error(new Error("Value is greater then 4"));
       }
    },1000)
   })
     
   /*
   this.firstSubscription = customObservable.subscribe((data)=>{
    console.log("Custom Observable:- ",data) } , (error)=>{console.log(error)} ,
     ()=>{console.log("Observable Compelted")}  )
  // agar error ko subscribe se recieve nhi kiya to red error ayega
*/

// ab pipe ka use kiya hai with extra funtionality
//data ko filter kiya or map kiya dusre data me , Transform and filter the data
this.firstSubscription = customObservable.pipe( filter((data)=>{ return Number(data)>1}),
map((data)=>{return "round is :"+(Number(data))}))
.subscribe((data)=>{
  console.log("Custom Observable:- ",data) } , (error)=>{console.log(error)} ,
   ()=>{console.log("Observable Compelted")} )


  
   
}
  ngOnDestroy(): void {
      this.firstSubscription.unsubscribe();
}
     
OnClick_ShoppingList(idx:number)
{
   this.shoppingListservice.subEditShoppingList.next(idx) ;
   
}

   /*
   OnIng_Added(ING_data:{name:any, amount:number})
   {
     this.shoppingListservice.ingreList.push(new ingredient(ING_data.name,ING_data.amount));
     //this.ingreList = this.shoppingListservice.getIngreList()
     
   }
   */

}
