import { Subject } from "rxjs";
import { ingredient } from "../shared/ingredient";

export class shoppingListService
{
    ingreList: ingredient[] = [ new ingredient("Apple",10),new ingredient("Vinegar",15) ];
    
    subEditShoppingList = new Subject<number>() ;
    
     
    getIngreList(){
        return this.ingreList
       // return this.ingreList.slice()  if sending copy  
    }
}